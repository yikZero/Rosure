import { Fragment } from 'react';

interface LinkSectionSkeletonProps {
  count?: number;
}

export function LinkSectionSkeleton({ count = 5 }: LinkSectionSkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <LinkCardSkeleton key={i} />
  ));

  return (
    <>
      <div className="mb-8">
        <h2 className="h-7 w-16 animate-pulse rounded-md bg-background/70" />
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skeletons}
        </div>
      </div>
    </>
  );
}

export function LinkCardSkeleton({ count = 1 }: LinkSectionSkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <Fragment key={`LinkCardSkeleton-${i}`}>
      <div
        key={`LinkCardSkeleton-${i}`}
        className="flex flex-col items-center gap-2 rounded-md border border-border/70 px-4 py-5"
      >
        <div className="size-8 animate-pulse rounded-md bg-background/70" />
        <div className="flex flex-col items-center gap-1.5">
          <div className="h-5 w-16 animate-pulse items-center rounded-md bg-background/70" />
          <div className="flex flex-col items-center gap-0 sm:hidden">
            <div className="h-5 w-32 animate-pulse rounded-md bg-background/70" />
            <div className="h-5 w-12 animate-pulse rounded-md bg-background/70" />
          </div>
          <div className="hidden flex-row gap-1 sm:flex">
            <div className="h-[1.125rem] w-12 animate-pulse rounded-md bg-background/70" />
            <div className="h-[1.125rem] w-6 animate-pulse rounded-md bg-background/70" />
          </div>
        </div>
      </div>
    </Fragment>
  ));
  return <>{skeletons}</>;
}
