import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SolvePrint Contact Form',
  description: 'Get in touch with our printing experts for personalized recommendations',
  viewport: 'width=device-width, initial-scale=1',
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
