import './global.css';

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
      <body>{children}</body>
    </html>
  );
}
