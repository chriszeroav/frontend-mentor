import './global.css';

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
      <body>{children}</body>
    </html>
  );
}
