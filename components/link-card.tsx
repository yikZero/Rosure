import type { Link as LinkType } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

interface LinkCardProps {
  link: LinkType;
}

export default function LinkCard({ link }: LinkCardProps) {
  const getFirstLetter = (string: string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase();
  };
  return (
    <>
      <Link
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 rounded-lg border border-border/70 px-4 py-5 transition-all duration-200 hover:bg-background/50"
      >
        {link.iconLight && link.iconDark ? (
          <>
            <Image
              style={{ transform: 'translate3d(0, 0, 0)' }}
              src={`${link.iconLight}!/format/webp`}
              alt={link.title}
              width={32}
              height={32}
              className="block size-8 rounded-lg object-cover dark:hidden"
            />
            <Image
              style={{ transform: 'translate3d(0, 0, 0)' }}
              src={`${link.iconDark}!/format/webp`}
              alt={link.title}
              width={32}
              height={32}
              className="hidden size-8 rounded-lg object-cover dark:block"
            />
          </>
        ) : link.icon ? (
          <Image
            style={{ transform: 'translate3d(0, 0, 0)' }}
            src={`${link.icon}!/format/webp`}
            alt={link.title}
            width={32}
            height={32}
            className="size-8 rounded-lg object-cover"
          />
        ) : (
          <div className="flex size-8 items-center justify-center rounded-lg bg-brand-600 text-base font-medium text-white">
            {getFirstLetter(link.title)}
          </div>
        )}
        <div className="flex flex-col items-center gap-1.5">
          <div className="line-clamp-1 items-center text-sm font-medium text-primary">
            {link.title}
          </div>
          <div className="line-clamp-2 items-center text-center text-sm font-normal text-secondary sm:hidden">
            {link.description}
          </div>
          <div className="hidden flex-row gap-1 sm:flex">
            {link.feature.split(',').map((feature, index) => (
              <div
                key={index}
                className="self-center text-nowrap rounded-full border border-border bg-background/30 px-3 text-xs font-medium text-secondary"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}
