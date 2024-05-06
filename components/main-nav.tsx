import { GithubIcon } from '@/components/icons';
import Search from '@/components/search';
import ThemeSwitcher from '@/components/theme-switcher';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { Suspense } from 'react';

export default function MainNav() {
  return (
    <>
      <nav className="hidden flex-row gap-3 sm:flex">
        <Suspense>
          <Search placeholder="Search Something" />
        </Suspense>
        <Link
          href="https://github.com/yikZero/Rosure"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center px-2 text-secondary transition-all duration-200 hover:text-primary"
        >
          Contribution
          <ArrowUpRightIcon className="absolute -right-1 top-1 size-3 text-secondary" />
        </Link>
        <Link
          href="https://github.com/yikZero/Rosure"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex size-8 items-center justify-center"
        >
          <GithubIcon className="size-4 text-secondary transition-all duration-200 group-hover:text-primary" />
        </Link>
        <ThemeSwitcher />
      </nav>
    </>
  );
}
