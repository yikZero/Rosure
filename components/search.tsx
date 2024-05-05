'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [originalPathname, setOriginalPathname] = useState('');

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
      replace(`/?${params.toString()}`);
    } else {
      params.delete('query');
      replace(originalPathname || pathname);
    }
  }

  function handleInputFocus() {
    setOriginalPathname(pathname);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-border bg-background/50 py-1.5 pl-9 text-sm outline-2 outline-tertiary placeholder:text-secondary"
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-secondary peer-focus:text-primary" />
    </div>
  );
}
