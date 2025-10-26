import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsAppCTA from '@/components/FloatingWhatsAppCTA';
import { defaultMetadata, generateLocalBusinessSchema, generateOrgSchema } from '@/lib/seo';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1A130E" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrgSchema()),
          }}
        />
      </head>
      <body className="bg-brand-dark text-brand-cream">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsAppCTA />  {/* chat bot  */} 
      </body>
    </html>
  );
}
