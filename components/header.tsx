import { Logo } from '@/components/icons';
import MainNav from '@/components/main-nav';
import MobileNav from '@/components/mobile-nav';
import Search from '@/components/search';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Header() {
  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50 flex h-16 flex-row items-center justify-between gap-8 border-b border-border bg-body-background px-4 md:px-5">
        <Link href="/" className="group flex flex-row gap-2">
          <Logo className="size-7 text-brand-500 transition-all duration-300 group-hover:opacity-80" />
          <span className="hidden self-end text-sm font-semibold text-primary sm:block">
            Rosure
          </span>
        </Link>
        <div className="-mr-2 block sm:hidden">
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
