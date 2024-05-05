import { tCategory } from '@/data/category.type';

interface CategoryProps {
  name: tCategory;
  url: string;
  label?: string;
  isExternal: boolean;
}

const generateCategories = (categories: tCategory[]): CategoryProps[] => {
  return categories.map((category) => ({
    name: category,
    url: `/list/${category.toLowerCase()}`,
    isExternal: false,
  }));
};

export const allCategories: CategoryProps[] = generateCategories([
  'Icons',
  'AI',
  'Inspirations',
  'Fonts',
  'Studio',
]);
