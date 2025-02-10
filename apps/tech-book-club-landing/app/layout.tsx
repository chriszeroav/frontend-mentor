import './global.css';

import { Martian_Mono, Inter } from 'next/font/google';
import { Footer, Header } from '@tech-book-club-landing/components/layout';

const martianMono = Martian_Mono({
  variable: '--font-martian-mono',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const metadata = {
  title: 'Tech Book Club Landing',
  description: 'Tech Book Club Landing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${martianMono.variable} ${inter.variable} antialiased`}>
        <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] gap-16 lg:gap-32">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
