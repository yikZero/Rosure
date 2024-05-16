import LinkCard from '@/components/link-card';
import { allCategories } from '@/lib/category';
import { fetchLinks } from '@/lib/link-data';

interface SectionLinksProps {
  query: string;
}

export default async function SectionLinks({ query }: SectionLinksProps) {
  const allLinks = await fetchLinks({});

  const filteredLinks = allLinks.filter(
    (link) =>
      link.title.toLowerCase().includes(query) ||
      link.feature?.toLowerCase().includes(query) ||
      link.description?.toLowerCase().includes(query),
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

  if (!allLinks || allLinks.length === 0) return null;

  if (filteredLinks.length === 0)
    return (
      <>
        <div className="mt-24 flex justify-center">
          <div className="select-none bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-xl font-medium text-transparent sm:text-2xl">{`NO RESULT ABOUT "${query}"`}</div>
        </div>
      </>
    );

  return (
    <>
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
    </>
  );
}
