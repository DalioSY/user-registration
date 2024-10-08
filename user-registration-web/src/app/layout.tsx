import { Inter as FontSans } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/main/Header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'User Resgistration',
  description: 'User Resgistration CRUD',
  keywords: [
    'Next.js',
    'Typescript',
    'shadcn-ui',
    'React',
    'Tailwind-css',
    'Axios',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex items-center justify-center gap-4 pt-4'>
            <Header />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
