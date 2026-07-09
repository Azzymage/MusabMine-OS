import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MusabMine OS',
  description: 'Enterprise AI-First Mining Operating System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
