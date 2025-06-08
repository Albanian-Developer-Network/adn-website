import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist_Mono, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Albanian Developer Network',
  description:
    'ADN is a community dedicated to Albanian developers, engineers and other professionals',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${geistMono.variable} antialiased`}
    >
      <Analytics />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
