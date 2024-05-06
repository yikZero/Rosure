'use client';

import { GithubIcon } from '@/components/icons';
import ThemeSwitcher from '@/components/theme-switcher';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex sm:hidden">
        <DropdownMenu.Root onOpenChange={setIsOpen} open={isOpen} modal={false}>
          <DropdownMenu.Trigger asChild>
            <button
              type="button"
              aria-label="Mobile Menu"
              className="group relative mb-1 block size-10 cursor-pointer rounded-full p-[10px] pt-[6px] transition-all duration-200 aria-expanded:bg-background aria-expanded:transition-colors aria-expanded:duration-200 sm:hidden"
            >
              <div className="mt-1.5 block h-0.5 w-5 rounded-sm bg-secondary transition-all duration-200 group-hover:-translate-y-[1px] group-aria-expanded:translate-y-1 group-aria-expanded:rotate-45" />
              <div className="mt-1.5 block h-0.5 w-5 rounded-sm bg-secondary duration-200 group-hover:translate-y-[1px] group-aria-expanded:-translate-y-1 group-aria-expanded:-rotate-45" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={4} asChild>
              <div className="z-50 w-2/5 min-w-32 rounded-xl border border-border/50 bg-white p-2 shadow-lg dark:bg-black">
                <div className="flex flex-col items-start gap-2">
                  <Link
                    href="https://github.com/yikZero/Rosure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center p-2 text-base text-secondary transition-all duration-200 hover:text-primary"
                  >
                    Contribution
                    <ArrowUpRightIcon className="absolute -right-1 top-1 size-3 text-secondary" />
                  </Link>
                  <div className="flex flex-row gap-2">
                    <Link
                      href="https://github.com/yikZero/Rosure"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex size-10 items-center justify-center"
                    >
                      <GithubIcon className="size-5 text-secondary transition-all duration-200 group-hover:text-primary" />
                    </Link>
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </nav>
    </>
  );
}
