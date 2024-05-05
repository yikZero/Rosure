'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <aside className="group/sidebar fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 border-r border-border md:sticky md:block">
        <div className="flex size-full flex-col gap-1 p-2">
          {allLinks.map((link) => {
            const isActive = link.url === pathname;
            return (
              <Link
                href={link.url}
                key={link.url}
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
                  {link.name}
                </span>
                <span className="rounded-md border border-border px-1 text-xs text-secondary opacity-0 transition-all duration-200 group-hover/sidebar:opacity-100">
                  123
                </span>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}

interface LinkProps {
  name: string;
  url: string;
  label?: string;
  isExternal: boolean;
}

export const allLinks: LinkProps[] = [
  {
    name: 'Icons',
    url: '/',
    isExternal: false,
  },
  {
    name: 'Inspirations',
    url: '/inspirations',
    isExternal: false,
  },
  {
    name: 'Fonts',
    url: '/fonts',
    isExternal: false,
  },
];
