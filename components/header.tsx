import { GithubIcon, Logo } from '@/components/icons';
import ThemeSwitcher from '@/components/theme-switcher';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="sticky inset-x-0 top-0 flex h-16 flex-row items-center justify-between border-b border-border bg-body-background px-5">
        <Link href="/" className="group flex flex-row items-center gap-2">
          <Logo className="size-8 rounded-md group-hover:opacity-80" />
          <span className="text-sm font-medium text-primary">Rosure</span>
        </Link>
        <div className="flex flex-row gap-3">
          <Link
            href="https://github.com/yikZero/Rosure"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center px-2 text-secondary transition-all duration-200 hover:text-primary"
          >
            Contribution
          </Link>
          <Link
            href="https://github.com/yikZero/Rosure"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex size-8 items-center justify-center"
          >
            <GithubIcon className="size-5 text-secondary transition-all duration-200 group-hover:text-primary" />
          </Link>
          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
}
