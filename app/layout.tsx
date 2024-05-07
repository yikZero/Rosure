import Footer from '@/components/footer';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import type { Viewport } from 'next';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import './globals.css';

export const metadata: Metadata = {
  title: 'Rosure - Hamster Plan',
  description: 'Collection of Icons, Fonts, Libraries, etc.',
  keywords: 'Rosure,Collection,Icons,Fonts,Libraries,yikZero,Design',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FCFCFC' },
    { media: '(prefers-color-scheme: dark)', color: '#131516' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            <div className="flex-1 items-start md:grid md:grid-cols-[13rem_minmax(0,1fr)] lg:grid-cols-[13rem_minmax(0,1fr)]">
              <Sidebar />
              <div className="relative min-h-full p-4 md:p-8">{children}</div>
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
