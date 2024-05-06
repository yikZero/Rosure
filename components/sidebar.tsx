'use client';

import { allCategories } from '@/data/category';
import { getLinksCountForCategory } from '@/lib/link.utils';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const allCategory = {
    name: 'All',
    url: '/',
    isExternal: false,
  };
  const categories = [allCategory, ...allCategories];
  return (
    <>
      <aside className="group/sidebar sticky top-16 z-30 w-full shrink-0 border-b border-border bg-body-background md:block md:h-[calc(100vh-4rem)] md:border-r">
        <div className="flex size-full flex-row  gap-1 overflow-x-scroll p-2 md:flex-col">
          {categories.map((category) => {
            const isActive = category.url === pathname;
            const linkCount = getLinksCountForCategory(
              category.name.toLowerCase(),
            );
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
                <span className="hidden rounded-md border border-border px-1 text-xs text-secondary opacity-0 transition-all duration-300 group-hover/sidebar:opacity-100 md:block">
                  {linkCount}
                </span>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
