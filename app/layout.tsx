import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nathfinancialsolutions.com'),
  title: { default: 'Nath Financial Solutions', template: '%s | Nath Financial Solutions' },
  description: 'Professional loan, insurance and tax assistance in Pune with transparent guidance and end-to-end support.',
  openGraph: { title: 'Nath Financial Solutions', description: 'Smart Solutions for Every Financial Need', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
