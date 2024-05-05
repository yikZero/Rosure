import LinkCard from '@/components/link-card';
import { allCategories } from '@/data/category';
import { getLinksForCategory } from '@/lib/link.utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allCategories.map((category) => ({
    slug: category.name.toLowerCase(),
  }));
}

export default function List({ params }: { params: { slug: string } }) {
  const category = allCategories.find(
    (category) => category.name.toLowerCase() === params.slug,
  );

  if (!category) {
    notFound();
  }

  const categoryLinks = getLinksForCategory(params.slug);

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {categoryLinks.map((link, index) => (
          <LinkCard key={index} link={link} />
        ))}
      </div>
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
