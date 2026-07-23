import type { Metadata } from "next";

const SITE_URL = "https://www.1654birchwood.com";

// Unbranded variant metadata — strips agent/brokerage references from
// title, description, and og data so search engines and MLS-syndicated
// previews don't expose the agent name on this URL.
export const metadata: Metadata = {
  title: "1654 Birchwood Drive — A contemporary zen residence in Lorne Park, Mississauga",
  description:
    "A custom 6,600+ sq ft residence in Lorne Park, Mississauga — 4+1 beds, 5+1 baths, soundproof theatre, wine cantina, Control4 throughout.",
  alternates: { canonical: `${SITE_URL}/unbranded` },
  openGraph: {
    title: "1654 Birchwood Drive · Lorne Park, Mississauga",
    description:
      "A custom 6,600+ sq ft contemporary zen residence in Lorne Park. 4+1 beds, 5+1 baths.",
    url: `${SITE_URL}/unbranded`,
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
    description: "4+1 beds, 5+1 baths, 6,600+ sq ft in Lorne Park.",
    images: ["/og-image.jpg"],
  },
  // Keep this route out of search engines so it doesn't compete with the
  // primary branded URL — /unbranded exists only as the MLS virtual-tour
  // destination, not as a public-discovery surface.
  robots: { index: false, follow: false },
};

export default function UnbrandedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
