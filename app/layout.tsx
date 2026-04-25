import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hello World App',
  description: 'A simple Next.js application displaying Hello World',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
