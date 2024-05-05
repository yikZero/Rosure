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
      <div className="grid grid-cols-5 gap-4">
        {filteredLinks.map((link, index) => (
          <LinkCard key={index} link={link} />
        ))}
      </div>
    </>
  );
}
