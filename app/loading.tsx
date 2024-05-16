import { LinkCardSkeleton } from '@/components/skeletons';

export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <LinkCardSkeleton count={24} />
      </div>
    </>
  );
}
