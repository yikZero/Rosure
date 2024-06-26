import ListLinks from '@/components/list-links';
import { LinkCardSkeleton } from '@/components/skeletons';
import { allCategories } from '@/lib/category';
import { fetchLinks } from '@/lib/link-data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateStaticParams() {
  return allCategories.map((category) => ({
    slug: category.name.toLowerCase(),
  }));
}

export default async function List({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const category = allCategories.find(
    (category) => category.name.toLowerCase() === slug,
  );

  if (!category) {
    notFound();
  }

  const allLinks = await fetchLinks();
  const categoryLinks = allLinks.filter(
    (link) => link.category === category.name,
  );

  if (categoryLinks.length == 0)
    return (
      <>
        <div className="mt-12 flex justify-center">
          <div className="select-none bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-2xl font-medium text-transparent">{`NO CONTENT UNDER "${params.slug.toUpperCase()}"`}</div>
        </div>
      </>
    );

  return (
    <>
      <Suspense fallback={<LinkCardSkeleton count={24} />}>
        <ListLinks categoryLinks={categoryLinks} />
      </Suspense>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = allCategories.find(
    (category) => category.name.toLowerCase() === params.slug,
  );

  if (!category) {
    throw new Error('Category not found');
  }

  const metadata: Metadata = {
    title: `${category.name} Library - Rosure`,
  };

  return metadata;
}

export const revalidate = 1800;
