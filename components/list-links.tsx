import LinkCard from '@/components/link-card';
import ScrollTop from '@/components/scroll-top';
import type { Link } from '@prisma/client';

interface ListLinksProps {
  categoryLinks: Link[];
}

export default function ListLinks({ categoryLinks }: ListLinksProps) {
  return (
    <>
      <ScrollTop />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categoryLinks.map((link, index) => (
          <LinkCard key={index} link={link} />
        ))}
      </div>
    </>
  );
}
