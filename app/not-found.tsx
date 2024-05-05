import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `404 - Rosure`,
  description: 'Uh oh! This page does not exist.',
};

export default function NotFound() {
  return (
    <>
      <div className="max-w-main relative mt-36 flex flex-col items-center gap-2 px-4">
        <div className="absolute -top-12 -z-10 select-none text-8xl font-semibold text-background/80">
          404
        </div>
        <h1 className="text-2xl font-semibold text-primary sm:text-4xl">
          Ah, the page has disappeared.
        </h1>
        <p className="text-base text-secondary">
          It looks like the link is broken, or the link does not exist on this
          site
        </p>
        <Link
          aria-label="Back to Home"
          href="/"
          className="mt-12 inline-flex items-center justify-start gap-1 whitespace-nowrap rounded-lg text-base font-medium text-primary hover:opacity-80 sm:max-w-fit sm:justify-center sm:px-3 sm:py-2"
        >
          Back to Homepage
        </Link>
      </div>
    </>
  );
}
