'use client';

import CategoryCount from '@/components/category-count';
import { allCategories } from '@/lib/category';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const allCategory = {
    name: 'All',
    url: '/',
  };
  const categories = [allCategory, ...allCategories];

  return (
    <>
      <aside className="group/sidebar sticky top-16 z-30 w-full shrink-0 overflow-x-scroll border-b border-border bg-body-background md:block md:h-[calc(100vh-4rem)] md:overflow-x-auto md:border-b-0 md:border-r">
        <div className="flex size-full flex-row gap-1 px-4 py-2 md:flex-col md:p-2">
          {categories.map((category) => {
            const isActive = category.url === pathname;
            return (
              <Link
                href={category.url}
                key={category.url}
                className={cn(
                  'group flex flex-row items-center justify-between rounded-md px-3 py-1.5 transition-all duration-200 md:py-2.5 md:pl-3 md:pr-2',
                  isActive && 'bg-background',
                )}
              >
                <span
                  className={cn(
                    'line-clamp-1 w-full text-secondary group-hover:text-primary',
                    isActive && 'text-primary',
                  )}
                >
                  {category.name}
                </span>
                <CategoryCount name={category.name} />
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
