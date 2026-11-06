import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { portfolioCategories } from '@/lib/portfolioData';
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
  const category = portfolioCategories[slug];

  if (!category) {
    notFound();
  }

  return <ProjectClientView category={category} />;
}
