import './global.css';

import { Red_Hat_Text } from 'next/font/google';

const redHatText = Red_Hat_Text({
  variable: '--font-red-hat-text',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Product List With Cart',
  description: 'Product List With Cart',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={redHatText.variable}>
        <div className="grid min-h-dvh bg-rose-custom-50">{children}</div>
      </body>
    </html>
  );
}
