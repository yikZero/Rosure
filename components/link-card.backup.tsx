'use client';

import { iLink } from '@/data/link.type';
import * as Tooltip from '@radix-ui/react-tooltip';
import Image from 'next/image';
import Link from 'next/link';

interface LinkCardProps {
  link: iLink;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={500}>
          <Tooltip.Trigger asChild>
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
                <div className="line-clamp-2 items-center text-sm font-normal text-secondary sm:hidden">
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
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={4}
              className="z-50 select-none rounded bg-white px-3 py-2 text-sm text-primary shadow-xl transition-all duration-300 will-change-[transform,opacity] dark:bg-black"
            >
              {link.url}
              <Tooltip.Arrow className="fill-white dark:fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
}
