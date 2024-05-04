'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [themeMode, setThemeMode] = useState<string | undefined>('dark');

  useEffect(() => {
    setThemeMode(theme);
  }, [theme]);

  return (
    <>
      <button
        aria-label={`Theme to ${theme === 'dark' ? 'Light' : 'Dark'}`}
        className={cn(
          'flex size-8 items-center justify-center text-secondary transition-all duration-200 hover:text-primary',
        )}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <Sun size={16} weight="regular" />
        ) : (
          <Moon size={16} weight="regular" />
        )}
      </button>
    </>
  );
}
