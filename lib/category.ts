interface CategoryProps {
  name: string;
  url: string;
  label?: string;
}

const categories = ['Icons', 'AI', 'Inspirations', 'Fonts', 'Studio'] as const;

export const allCategories: CategoryProps[] = categories.map((name) => ({
  name,
  url: `/list/${name.toLowerCase()}`,
}));
