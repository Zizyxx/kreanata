import { PortfolioProject } from './portfolioData';

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width?: number;
  height?: number;
  format?: string;
  created_at?: string;
}

export async function fetchCloudinaryDokumentasi(): Promise<PortfolioProject[]> {
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
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/by_asset_folder?asset_folder=dokumentasi&max_results=100`,
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
        return mapCloudinaryResources(data.resources);
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
          expression: 'asset_folder:dokumentasi',
          max_results: 100,
          sort_by: [{ created_at: 'desc' }],
        }),
        next: { revalidate: 60 },
      }
    );

    if (searchRes.ok) {
      const searchData = await searchRes.json();
      if (Array.isArray(searchData.resources) && searchData.resources.length > 0) {
        return mapCloudinaryResources(searchData.resources);
      }
    }

    return [];
  } catch (error) {
    console.error('Failed to fetch Cloudinary dokumentasi:', error);
    return [];
  }
}

function mapCloudinaryResources(resources: CloudinaryResource[]): PortfolioProject[] {
  return resources.map((r, i) => {
    const w = r.width || 6000;
    const h = r.height || 4000;
    const ratio = w / h;
    const aspect =
      Math.abs(ratio - 1.5) < 0.05
        ? 'aspect-[3/2]'
        : Math.abs(ratio - 16 / 9) < 0.05
        ? 'aspect-[16/9]'
        : Math.abs(ratio - 4 / 3) < 0.05
        ? 'aspect-[4/3]'
        : Math.abs(ratio - 0.8) < 0.05
        ? 'aspect-[4/5]'
        : ratio > 1
        ? 'aspect-[16/10]'
        : 'aspect-[4/5]';

    return {
      id: `dok-${r.public_id || i + 1}`,
      categoryType: 'dokumentasi',
      title: {
        EN: `Documentation Visual ${String(i + 1).padStart(2, '0')}`,
        ID: `Dokumentasi Visual ${String(i + 1).padStart(2, '0')}`,
      },
      client: 'Kreanata Production',
      year: '2024',
      tags: {
        EN: ['Dokumentasi', 'Live Event'],
        ID: ['Dokumentasi', 'Live Event'],
      },
      description: {
        EN: 'Live event visual documentation captured by Kreanata.',
        ID: 'Dokumentasi visual acara langsung oleh Kreanata.',
      },
      image: r.secure_url,
      aspect,
    };
  });
}

