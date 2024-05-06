'use client';

import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <button
          aria-label={`Switch to light mode`}
          className={cn(
            'flex size-10 items-center justify-center text-secondary transition-all duration-200 hover:text-primary sm:size-8',
          )}
        >
          <MoonIcon className="size-5 sm:size-4" />
        </button>
      </>
    );
  }

  return (
    <>
      <button
        aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        className={cn(
          'flex size-10 items-center justify-center text-secondary transition-all duration-200 hover:text-primary sm:size-8',
        )}
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? (
          <MoonIcon className="size-5 sm:size-4" />
        ) : (
          <SunIcon className="size-5 sm:size-4" />
        )}
      </button>
    </>
  );
}
