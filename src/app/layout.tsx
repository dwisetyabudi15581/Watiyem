import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cateringwatiyem.site"),
  title: "Catering Watiyem — Jasa Catering Lezat & Murah di Magetan",
  description:
    "Jasa catering Magetan untuk acara syukuran, kantor & keluarga. Nasi box mulai Rp15rb, prasmanan, snack box & catering harian. Pesan gampang via WhatsApp!",
  keywords: [
    "catering magetan",
    "jasa catering magetan",
    "catering magetan murah",
    "nasi box magetan",
    "katering magetan",
    "prasmanan acara kantor magetan",
    "snack box magetan",
    "catering harian magetan",
    "catering syukuran magetan",
    "tumpengan magetan",
    "catering terdekat",
    "langganan makan siang magetan",
  ],
  authors: [{ name: "Catering Watiyem" }],
  openGraph: {
    title: "Catering Watiyem — Jasa Catering Lezat & Murah di Magetan",
    description:
      "Nasi box mulai Rp15rb, prasmanan, snack box & catering harian untuk warga Magetan dan sekitarnya. Pesan gampang via WhatsApp!",
    url: "https://cateringwatiyem.site",
    siteName: "Catering Watiyem",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1024,
        height: 848,
        alt: "Nasi box catering Magetan dari Catering Watiyem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering Watiyem — Jasa Catering Lezat & Murah di Magetan",
    description:
      "Nasi box mulai Rp15rb, prasmanan, snack box & catering harian untuk Magetan dan sekitarnya.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Data terstruktur LocalBusiness — sinyal kuat untuk SEO lokal Magetan. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Catering Watiyem",
  description:
    "Jasa catering makanan lezat & murah di Magetan: nasi box, prasmanan acara kantor, catering harian, dan snack box.",
  servesCuisine: ["Indonesian", "Javanese"],
  priceRange: "Rp8.000 - Rp45.000",
  telephone: "+6285706800961",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Setro, Tebon",
    addressLocality: "Kec. Barat, Kabupaten Magetan",
    addressRegion: "Jawa Timur",
    postalCode: "63395",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: -7.5596481, longitude: 111.4541782 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  areaServed: { "@type": "City", name: "Magetan" },
  url: "https://cateringwatiyem.site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Toaster />
      </body>
    </html>
  );
}
