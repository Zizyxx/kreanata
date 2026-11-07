import { PortfolioProject } from './portfolioData';

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width?: number;
  height?: number;
  format?: string;
  created_at?: string;
}

export async function fetchCloudinaryCategory(folder: 'dokumentasi' | 'photoshoot'): Promise<PortfolioProject[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'xidvgvul';
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return [];
  }

  try {
    const authStr = `${apiKey}:${apiSecret}`;
    const base64Auth = Buffer.from(authStr).toString('base64');

    // 1. First attempt: Query Cloudinary REST API by asset_folder
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/by_asset_folder?asset_folder=${folder}&max_results=100`,
      {
        headers: {
          Authorization: `Basic ${base64Auth}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.resources) && data.resources.length > 0) {
        return mapCloudinaryResources(data.resources, folder);
      }
    }

    // 2. Fallback attempt: Cloudinary Search API
    const searchRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${base64Auth}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          expression: `asset_folder:${folder}`,
          max_results: 100,
          sort_by: [{ created_at: 'desc' }],
        }),
        next: { revalidate: 60 },
      }
    );

    if (searchRes.ok) {
      const searchData = await searchRes.json();
      if (Array.isArray(searchData.resources) && searchData.resources.length > 0) {
        return mapCloudinaryResources(searchData.resources, folder);
      }
    }

    return [];
  } catch (error) {
    console.error(`Failed to fetch Cloudinary ${folder}:`, error);
    return [];
  }
}

export async function fetchCloudinaryDokumentasi(): Promise<PortfolioProject[]> {
  return fetchCloudinaryCategory('dokumentasi');
}

export async function fetchCloudinaryPhotoshoot(): Promise<PortfolioProject[]> {
  return fetchCloudinaryCategory('photoshoot');
}

function mapCloudinaryResources(resources: CloudinaryResource[], folder: 'dokumentasi' | 'photoshoot'): PortfolioProject[] {
  return resources.map((r, i) => {
    const w = r.width || (folder === 'photoshoot' ? 3600 : 6000);
    const h = r.height || (folder === 'photoshoot' ? 2400 : 4000);
    const ratio = w / h;

    const aspect =
      Math.abs(ratio - 1.5) < 0.05
        ? 'aspect-[3/2]'
        : Math.abs(ratio - 2 / 3) < 0.05
        ? 'aspect-[2/3]'
        : Math.abs(ratio - 16 / 9) < 0.05
        ? 'aspect-[16/9]'
        : Math.abs(ratio - 4 / 3) < 0.05
        ? 'aspect-[4/3]'
        : Math.abs(ratio - 0.8) < 0.05
        ? 'aspect-[4/5]'
        : ratio > 1
        ? 'aspect-[16/10]'
        : 'aspect-[4/5]';

    const pid = (r.public_id || '').toLowerCase();

    let titleEn = `Visual Archive ${String(i + 1).padStart(2, '0')}`;
    let titleId = `Arsip Visual ${String(i + 1).padStart(2, '0')}`;
    let tagsEn = ['Photoshoot', 'Editorial'];
    let tagsId = ['Photoshoot', 'Editorial'];

    if (folder === 'dokumentasi') {
      titleEn = `Event Documentation ${String(i + 1).padStart(2, '0')}`;
      titleId = `Dokumentasi Acara ${String(i + 1).padStart(2, '0')}`;
      tagsEn = ['Dokumentasi', 'Live Event'];
      tagsId = ['Dokumentasi', 'Live Event'];
    } else {
      if (pid.includes('food')) {
        titleEn = `Culinary & Food Styling ${String(i + 1).padStart(2, '0')}`;
        titleId = `Penataan Kuliner & Makanan ${String(i + 1).padStart(2, '0')}`;
        tagsEn = ['Photoshoot', 'Culinary'];
        tagsId = ['Photoshoot', 'Kuliner'];
      } else if (pid.includes('drink')) {
        titleEn = `Artisan Beverage Editorial ${String(i + 1).padStart(2, '0')}`;
        titleId = `Editorial Minuman Artisan ${String(i + 1).padStart(2, '0')}`;
        tagsEn = ['Photoshoot', 'Beverage'];
        tagsId = ['Photoshoot', 'Minuman'];
      } else {
        titleEn = `Studio Editorial Portrait ${String(i + 1).padStart(2, '0')}`;
        titleId = `Potret Editorial Studio ${String(i + 1).padStart(2, '0')}`;
        tagsEn = ['Photoshoot', 'Editorial'];
        tagsId = ['Photoshoot', 'Editorial'];
      }
    }

    return {
      id: `${folder === 'dokumentasi' ? 'dok' : 'ps'}-${r.public_id || i + 1}`,
      categoryType: folder,
      title: {
        EN: titleEn,
        ID: titleId,
      },
      client: 'Kreanata Studio',
      year: '2024',
      tags: {
        EN: tagsEn,
        ID: tagsId,
      },
      description: {
        EN: folder === 'dokumentasi'
          ? 'Live event visual documentation captured by Kreanata.'
          : 'Commercial and editorial photoshoot session produced by Kreanata.',
        ID: folder === 'dokumentasi'
          ? 'Dokumentasi visual acara langsung oleh Kreanata.'
          : 'Sesi photoshoot komersial dan editorial oleh Kreanata.',
      },
      image: r.secure_url,
      aspect,
    };
  });
}
