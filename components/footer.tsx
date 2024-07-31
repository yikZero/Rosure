import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center gap-1 text-nowrap border-t border-border px-4 pb-6 pt-8 text-secondary sm:flex-row">
        <div className="flex flex-row gap-1">
          <div>
            UI inspired by
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="inline pl-1 font-medium text-primary underline underline-offset-4"
              href="https://svgl.app/"
            >
              svgl
            </Link>
            ,
          </div>
          <div>
            Built by
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="inline pl-1 font-medium text-primary underline underline-offset-4"
              href="https://ro.yikzero.com/"
            >
              yikZero
            </Link>
            .
          </div>
        </div>
        <div>
          The source code is available on
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="inline pl-1 font-medium text-primary underline underline-offset-4"
            href="https://github.com/yikZero/Rosure"
          >
            Github
          </Link>
          .
        </div>
      </footer>
    </>
  );
}
