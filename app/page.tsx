import LinkCard from '@/components/link-card';
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

  return (
    <>
      {filteredLinks.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredLinks.map((link, index) => (
            <LinkCard key={index} link={link} />
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
