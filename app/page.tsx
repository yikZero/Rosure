import FavoriteLinks from '@/components/favorite-links';
import SectionLinks from '@/components/section-links';
import { LinkSectionSkeleton } from '@/components/skeletons';
import { Suspense } from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query?.toLowerCase() || '';

  return (
    <>
      {!query && (
        <Suspense fallback={<LinkSectionSkeleton />}>
          <FavoriteLinks />
        </Suspense>
      )}
      <Suspense fallback={<LinkSectionSkeleton count={15} />}>
        <SectionLinks query={query} />
      </Suspense>
    </>
  );
}
