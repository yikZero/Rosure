'use client';

import { allCategories } from '@/data/category';
import { getLinksCountForCategory } from '@/lib/link.utils';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <aside className="group/sidebar fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 border-r border-border md:sticky md:block">
        <div className="flex size-full flex-col gap-1 p-2">
          {allCategories.map((category) => {
            const isActive = category.url === pathname;
            const linkCount = getLinksCountForCategory(
              category.name.toLowerCase(),
            );
            return (
              <Link
                href={category.url}
                key={category.url}
                className={cn(
                  'group flex flex-row items-center justify-between rounded-md py-2.5 pl-3 pr-2 transition-all duration-200',
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
                <span className="rounded-md border border-border px-1 text-xs text-secondary opacity-0 transition-all duration-300 group-hover/sidebar:opacity-100">
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
