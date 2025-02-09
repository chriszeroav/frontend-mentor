import './global.css';

import { AppProvider } from '@password-generator-app/contexts/app';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata = {
  title: 'Password Generator App',
  description: 'Password Generator App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <div className="h-screen grid overflow-hidden bg-[#08070B]">
          <AppProvider>{children}</AppProvider>
        </div>
      </body>
    </html>
  );
}
