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
        {link.iconThemed?.light && link.iconThemed?.dark ? (
          <>
            <Image
              src={link.iconThemed.light}
              alt="wechat qrcode"
              placeholder="blur"
              className="block size-8 rounded-lg object-cover dark:hidden"
            />
            <Image
              src={link.iconThemed.dark}
              alt="wechat qrcode"
              placeholder="blur"
              className="hidden size-8 rounded-lg object-cover dark:block"
            />
          </>
        ) : link.icon ? (
          <Image
            src={link.icon}
            alt="wechat qrcode"
            placeholder="blur"
            className="size-8 rounded-lg object-cover"
          />
        ) : null}
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
