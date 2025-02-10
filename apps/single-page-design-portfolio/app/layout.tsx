import './global.css';

import { Plus_Jakarta_Sans } from 'next/font/google';
import {
  Footer,
  Header,
} from '@single-page-design-portfolio/components/layout';

const plus_jakarta_sans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const metadata = {
  title: 'Single Page Design Portfolio',
  description: 'Single Page Design Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.variable}  antialiased`}>
        <div className="bg-custom-light-cream min-h-dvh grid">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
