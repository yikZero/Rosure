import LinkCard from '@/components/link-card';
import { fetchLinks } from '@/lib/link-data';
import { StarIcon } from '@heroicons/react/20/solid';

export default async function FavoriteLinks() {
  const allLinks = await fetchLinks();

  const favoriteLinks = allLinks.filter((link) => link.isFavorite);

  if (!favoriteLinks || favoriteLinks.length === 0) return null;

  return (
    <>
      <div className="mb-8">
        <h2 className="sticky top-[7.375rem] z-10 flex select-none flex-row gap-1 text-base font-semibold text-tertiary mix-blend-difference dark:text-primary sm:text-lg md:top-16">
          <StarIcon className="size-4 self-center text-brand-600 dark:text-brand-500" />
          Favorites
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {favoriteLinks.map((link, index) => (
            <LinkCard key={`favorite-${index}`} link={link} />
          ))}
        </div>
      </div>
    </>
  );
}
