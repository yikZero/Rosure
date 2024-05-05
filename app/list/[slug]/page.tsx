import { allCategories } from '@/data/category';
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

  return <div>{category.name}</div>;
}
