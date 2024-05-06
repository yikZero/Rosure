import LinkCard from '@/components/link-card';
import { allCategories } from '@/data/category';
import { allLinks } from '@/data/links';

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query?.toLowerCase() || '';

  const filteredLinks = allLinks.filter((link) =>
    link.title.toLowerCase().includes(query),
  );

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
      {Object.keys(linksByCategory).length > 0 ? (
        <div className="space-y-8">
          {Object.entries(linksByCategory).map(([category, links]) => (
            <div key={category}>
              <h2 className="sticky top-[7.375rem] select-none text-base font-semibold text-primary mix-blend-difference sm:text-lg md:top-16">
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
          <div className="select-none bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-2xl font-medium text-transparent">{`NO RESULT ABOUT "${query}"`}</div>
        </div>
      )}
    </>
  );
}
