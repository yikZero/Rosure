import LinkCard from '@/components/link-card';
import ScrollTop from '@/components/scroll-top';
import { allCategories } from '@/lib/category';
import fetchLinks from '@/lib/link-data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allCategories.map((category) => ({
    slug: category.name.toLowerCase(),
  }));
}

export default async function List({ params }: { params: { slug: string } }) {
  const category = allCategories.find(
    (category) => category.name.toLowerCase() === params.slug,
  );

  if (!category) {
    notFound();
  }

  const categoryLinks = await fetchLinks({ category: category.name });

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
      <ScrollTop />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
