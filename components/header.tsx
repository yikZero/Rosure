import { Logo } from '@/components/icons';
import MainNav from '@/components/main-nav';
import MobileNav from '@/components/mobile-nav';
import Search from '@/components/search';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Header() {
  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50 flex h-16 flex-row items-center justify-between gap-3 border-b border-border bg-body-background px-4 md:px-5">
        <Link href="/" className="group flex flex-row items-center gap-2">
          <Logo className="size-8 rounded-md group-hover:opacity-80" />
          <span className="hidden text-sm font-medium text-primary sm:block">
            Rosure
          </span>
        </Link>
        <div className="block sm:hidden">
          <Suspense>
            <Search placeholder="Search Something" />
          </Suspense>
        </div>
        <MainNav />
        <MobileNav />
      </header>
    </>
  );
}
