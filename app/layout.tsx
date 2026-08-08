import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PROPERTY } from "@/lib/property";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

// ⚠️ PLACEHOLDER DOMAIN. Swap https://www.1654birchwood.com for the real
// domain in this one spot (and in app/robots.ts + app/sitemap.ts) once
// registered.
const SITE_URL = "https://www.1654birchwood.com";
const TITLE = "1654 Birchwood Drive — A Contemporary Zen Residence in Lorne Park, Mississauga";
const DESCRIPTION =
  "A custom 6,600+ sq ft residence in Lorne Park — contemporary design with zen influence, crafted over four years. 5+1 beds, 5+1 baths, Miele kitchen, soundproof theatre, wine cantina, Control4 throughout. MLS® " +
  PROPERTY.mlsNumber + ". Listed by David Anderson Oey, Harvey Kalles Real Estate Ltd.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "1654 Birchwood Drive · Lorne Park, Mississauga",
    description:
      "A contemporary zen residence in Lorne Park — 5+1 beds, 5+1 baths, 6,600+ sq ft. MLS® " + PROPERTY.mlsNumber + ".",
    url: SITE_URL,
    siteName: "1654 Birchwood Drive",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "1654 Birchwood Drive — Lorne Park, Mississauga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1654 Birchwood Drive · Lorne Park, Mississauga",
    description:
      "A contemporary zen residence in Lorne Park — 5+1 beds, 5+1 baths, 6,600+ sq ft. MLS® " + PROPERTY.mlsNumber + ".",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

// JSON-LD Schema.org RealEstateListing — populated with real numbers from
// the active MLS® listing.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "1654 Birchwood Drive",
  url: SITE_URL,
  description:
    "An exceptional custom residence in Lorne Park, Mississauga — a fusion of contemporary design and serene zen influence. 6,600+ square feet of finished living across three levels, crafted over four years.",
  image: [`${SITE_URL}/og-image.jpg`],
  datePosted: "2025-09-29",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1654 Birchwood Drive",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: PROPERTY.postalCode,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: PROPERTY.latitude,
    longitude: PROPERTY.longitude,
  },
  offers: {
    "@type": "Offer",
    price: PROPERTY.priceNumeric,
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "RealEstateAgent",
      name: PROPERTY.agent.name,
      telephone: PROPERTY.agent.directPhone,
      email: PROPERTY.agent.email,
      url: PROPERTY.agent.website,
      worksFor: {
        "@type": "Organization",
        name: PROPERTY.agent.brokerage,
      },
    },
  },
  numberOfRooms: 17,
  numberOfBedrooms: PROPERTY.bedroomsNumeric,
  numberOfBathroomsTotal: PROPERTY.bathroomsNumeric,
  floorSize: {
    "@type": "QuantitativeValue",
    value: PROPERTY.livingAreaSqftNumeric,
    unitCode: "FTK",
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "MLS",
    value: PROPERTY.mlsNumber,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ScrollReveal />
          <Header />
          <main>{children}</main>
          <Footer />

          <audio id="ambient-audio" loop preload="metadata">
            <source src="/ambient.mp3" type="audio/mpeg" />
          </audio>
        </LanguageProvider>
      </body>
    </html>
  );
}
