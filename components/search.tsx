'use client';

import { XCircleIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [originalPathname, setOriginalPathname] = useState('');
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('query')?.toString() || '',
  );

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
      replace(`/?${params.toString()}`);
    } else {
      params.delete('query');
      replace(originalPathname || pathname);
    }
  }, 300);

  function handleInputFocus() {
    setOriginalPathname(pathname);
  }

  function handleClearInput() {
    setSearchTerm('');
    handleSearch('');
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0 self-center">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-border bg-background/50 py-1.5 pl-9 pr-7 text-sm outline-2 outline-tertiary placeholder:text-secondary"
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        value={searchTerm}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-secondary peer-focus:text-primary" />
      {searchTerm && (
        <XCircleIcon
          onClick={handleClearInput}
          className="absolute right-2 top-1/2 size-4 -translate-y-1/2 cursor-pointer text-secondary transition-all duration-200 hover:text-primary"
        />
      )}
    </div>
  );
}
