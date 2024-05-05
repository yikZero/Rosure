import { iLink } from '@/data/link.type';
import Image from 'next/image';
import Link from 'next/link';

interface LinkCardProps {
  link: iLink;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <>
      <Link
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 rounded-lg border border-border/70 px-4 py-5 transition-all duration-200 hover:bg-background/50"
      >
        <div className="relative size-8 overflow-hidden rounded-lg">
          <Image
            src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=64`}
            alt={link.title}
            className="size-8 object-cover"
            fill
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="line-clamp-1 items-center text-sm font-medium text-primary">
            {link.title}
          </div>
          <div className="line-clamp-2 text-center text-sm font-normal text-secondary">
            {link.description}
          </div>
        </div>
      </Link>
    </>
  );
}
