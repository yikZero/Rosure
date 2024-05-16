import LinkCard from '@/components/link-card';
import { allCategories } from '@/lib/category';
import fetchLinks from '@/lib/link-data';
import { StarIcon } from '@heroicons/react/20/solid';

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const allLinks = await fetchLinks({});

  const query = searchParams?.query?.toLowerCase() || '';

  const filteredLinks = allLinks.filter((link) =>
    link.title.toLowerCase().includes(query),
  );

  const favoriteLinks = allLinks.filter((link) => link.isFavorite);

  const linksByCategory = allCategories.reduce(
    (acc, category) => {
      const links = filteredLinks.filter(
        (link) => link.category === category.name,
      );
      if (links.length > 0) {
        acc[category.name] = links;
      }
      return acc;
    },
    {} as { [key: string]: typeof allLinks },
  );

  return (
    <>
      {favoriteLinks.length > 0 && query === '' && (
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
      )}
      {Object.keys(linksByCategory).length > 0 ? (
        <div className="space-y-8">
          {Object.entries(linksByCategory).map(([category, links]) => (
            <div key={category}>
              <h2 className="sticky top-[7.375rem] z-10 select-none text-base font-semibold text-tertiary mix-blend-difference dark:text-primary sm:text-lg md:top-16">
                {category}
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {links.map((link, index) => (
                  <LinkCard key={`${category}-${index}`} link={link} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 flex justify-center">
          <div className="select-none bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-xl font-medium text-transparent sm:text-2xl">{`NO RESULT ABOUT "${query}"`}</div>
        </div>
      )}
    </>
  );
}
