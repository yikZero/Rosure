import { GithubIcon, Logo } from '@/components/icons';
import ThemeSwitcher from '@/components/theme-switcher';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50 flex h-16 flex-row items-center justify-between border-b border-border bg-body-background px-4 md:px-5">
        <Link href="/" className="group flex flex-row items-center gap-2">
          <Logo className="size-8 rounded-md group-hover:opacity-80" />
          <span className="text-sm font-medium text-primary">Rosure</span>
        </Link>
        <div className="flex flex-row gap-3">
          <Link
            href="https://github.com/yikZero/Rosure"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center px-2 text-secondary transition-all duration-200 hover:text-primary"
          >
            Contribution
            <ArrowUpRight
              size={12}
              className="absolute -right-1 top-1 text-secondary"
            />
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
        </div>
      </header>
    </>
  );
}
