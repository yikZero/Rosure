import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import './globals.css';

export const metadata: Metadata = {
  title: 'Rosure',
  description: 'Collection of Icons, Fonts, Libraries, etc.',
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
          <div className="flex min-h-dvh flex-row overflow-hidden bg-body-background">
            <Sidebar />
            <div className="grow overflow-y-auto p-2">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
