'use client';

import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

interface CategoryCountProps {
  name: string;
}

interface Category {
  category: string;
  count: number;
}

interface DataType {
  total: number;
  categories: Category[];
}

export default function CategoryCount({ name }: CategoryCountProps) {
  const { data } = useSWR<DataType>(`/api/categories/count`, fetcher, {
    revalidateOnFocus: false,
  });

  const getCategoryCount = (name: string) => {
    if (data) {
      if (name === 'All') {
        return data.total;
      }
      if (data.categories) {
        const category = data.categories.find((cat) => cat.category === name);
        return category ? category.count : 0;
      }
    }
    return 0;
  };

  return (
    <span className="hidden rounded-md border border-border px-1 text-xs text-secondary opacity-0 transition-all duration-300 group-hover/sidebar:opacity-100 md:block">
      {getCategoryCount(name)}
    </span>
  );
}
