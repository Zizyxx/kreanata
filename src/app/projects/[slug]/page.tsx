import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { portfolioCategories } from '@/lib/portfolioData';
import { fetchCloudinaryDokumentasi } from '@/lib/cloudinary';
import ProjectClientView from './ProjectClientView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'fotografi' },
    { slug: 'videografi' },
    { slug: 'desain' },
    { slug: 'website' },
    { slug: 'photography' },
    { slug: 'videography' },
    { slug: 'design' },
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

  // Enhance dokumentasi projects live from Cloudinary folder 'dokumentasi'
  if (slug === 'fotografi' || slug === 'photography') {
    try {
      const liveDokumentasi = await fetchCloudinaryDokumentasi();
      if (liveDokumentasi.length > 0) {
        const photoshoots = category.projects.filter((p) => p.categoryType !== 'dokumentasi');
        category = {
          ...category,
          projects: [...photoshoots, ...liveDokumentasi],
        };
      }
    } catch (e) {
      console.error('Failed to load live Cloudinary photos:', e);
    }
  }

  return <ProjectClientView category={category} />;
}
