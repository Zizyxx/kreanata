import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { portfolioCategories } from '@/lib/portfolioData';
import { fetchCloudinaryDokumentasi, fetchCloudinaryPhotoshoot } from '@/lib/cloudinary';
import ProjectClientView from './ProjectClientView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'fotografi' },
    { slug: 'videografi' },
    { slug: 'website' },
    { slug: 'photography' },
    { slug: 'videography' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = portfolioCategories[slug];
  if (!category) {
    return {
      title: 'Project Not Found — Kreanata',
    };
  }

  return {
    title: `${category.title.ID} — Kreanata Studio`,
    description: category.subtitle.ID,
  };
}

export default async function ProjectCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  let category = portfolioCategories[slug];

  if (!category) {
    notFound();
  }

  // Enhance photography projects live from Cloudinary folders 'photoshoot' and 'dokumentasi'
  if (slug === 'fotografi' || slug === 'photography') {
    try {
      const [livePhotoshoots, liveDokumentasi] = await Promise.all([
        fetchCloudinaryPhotoshoot(),
        fetchCloudinaryDokumentasi(),
      ]);

      const basePhotoshoots =
        livePhotoshoots.length > 0
          ? livePhotoshoots
          : category.projects.filter((p) => p.categoryType === 'photoshoot');

      const baseDokumentasi =
        liveDokumentasi.length > 0
          ? liveDokumentasi
          : category.projects.filter((p) => p.categoryType === 'dokumentasi');

      category = {
        ...category,
        projects: [...basePhotoshoots, ...baseDokumentasi],
      };
    } catch (e) {
      console.error('Failed to load live Cloudinary photos:', e);
    }
  }

  return <ProjectClientView category={category} />;
}
