'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <aside className="w-48 max-w-48 flex-none border-r border-border">
        <div className="flex size-full flex-col p-2">
          {allLinks.map((link) => {
            const isActive = link.url === pathname;
            return (
              <Link
                href={link.url}
                key={link.url}
                className={cn(
                  'group flex flex-row items-center justify-between rounded-md px-3 py-2 transition-all duration-200',
                  isActive && 'bg-background',
                )}
              >
                <span
                  className={cn(
                    'w-full text-secondary group-hover:text-primary',
                    isActive && 'text-primary',
                  )}
                >
                  {link.name}
                </span>
                <span className="rounded-md border border-border px-1 text-xs text-secondary">
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
