import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Body Font - Clean, readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Display Font - Friendly, rounded
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mowispetcare.com'),
  title: "Mowi's Pet Care | Professional Dog Walking & Pet Sitting in Los Angeles",
  description: "Your pets deserve care that is like family. Professional dog walking, pet sitting, and overnight care in Los Angeles with the consistency of one trusted caretaker - Mowi.",
  keywords: ["pet sitting Los Angeles", "dog walking LA", "pet care", "overnight pet care", "private boarding", "professional pet sitter", "woman-owned pet care"],
  openGraph: {
    title: "Mowi's Pet Care | Professional Pet Care in Los Angeles",
    description: "Your pets deserve care that is like family. One dedicated caretaker, personalized attention.",
    url: "https://mowispetcare.com",
    siteName: "Mowi's Pet Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mowi's Pet Care | Professional Pet Care in LA",
    description: "Your pets deserve care that is like family",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Mowi's Pet Care",
    description: 'Professional dog walking, pet sitting, and overnight care in Los Angeles',
    url: 'https://mowispetcare.com',
    telephone: '818-696-0055',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    priceRange: '$$',
    serviceType: ['Dog Walking', 'Pet Sitting', 'Overnight Care', 'Private Boarding'],
    areaServed: {
      '@type': 'City',
      name: 'Los Angeles',
    },
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
