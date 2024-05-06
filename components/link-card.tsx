import { iLink } from '@/data/link.type';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

interface LinkCardProps {
  link: iLink;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <>
      <Suspense fallback={<LinkCardFallback />}>
        <Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 rounded-lg border border-border/70 px-4 py-5 transition-all duration-200 hover:bg-background/50"
        >
          {link.iconThemed?.light && link.iconThemed?.dark ? (
            <>
              <Image
                style={{ transform: 'translate3d(0, 0, 0)' }}
                src={link.iconThemed.light}
                alt="wechat qrcode"
                placeholder="blur"
                className="block size-8 rounded-lg object-cover dark:hidden"
              />
              <Image
                style={{ transform: 'translate3d(0, 0, 0)' }}
                src={link.iconThemed.dark}
                alt="wechat qrcode"
                placeholder="blur"
                className="hidden size-8 rounded-lg object-cover dark:block"
              />
            </>
          ) : link.icon ? (
            <Image
              style={{ transform: 'translate3d(0, 0, 0)' }}
              src={link.icon}
              alt="wechat qrcode"
              placeholder="blur"
              className="size-8 rounded-lg object-cover"
            />
          ) : null}
          <div className="flex flex-col items-center gap-1.5">
            <div className="line-clamp-1 items-center text-sm font-medium text-primary">
              {link.title}
            </div>
            <div className="line-clamp-2 items-center text-center text-sm font-normal text-secondary sm:hidden">
              {link.description}
            </div>
            <div className="hidden flex-row gap-1 sm:flex">
              {link.feature.map((feature, index) => (
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
      </Suspense>
    </>
  );
}

function LinkCardFallback() {
  return (
    <>
      <div className="flex animate-pulse flex-col items-center gap-2 rounded-lg border border-border/70 px-4 py-5 transition-all duration-200">
        <div className="size-8 rounded-lg bg-background" />
        <div className="flex flex-col items-center gap-1">
          <div className="h-5 w-20 items-center rounded-full" />
          <div className="flex flex-col gap-1 sm:hidden">
            <div className="h-5 w-40 rounded-full bg-background" />
            <div className="h-5 w-40 rounded-full bg-background" />
          </div>
          <div className="hidden flex-row gap-1 sm:flex">
            <div className="h-4.5 w-16 rounded-full bg-background" />
            <div className="h-4.5 w-16 rounded-full bg-background" />
          </div>
        </div>
      </div>
    </>
  );
}
