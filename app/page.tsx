import LinkCard from '@/components/link-card';
import { allLinks } from '@/data/links';

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {allLinks.map((link, index) => (
          <LinkCard key={index} link={link} />
        ))}
      </div>
    </>
  );
}
