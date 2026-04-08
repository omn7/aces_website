import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ACES BVCOE — Association of Computer Engineering Students | Bharati Vidyapeeth Pune",
    template: "%s | ACES BVCOE",
  },
  description:
    "ACES (Association of Computer Engineering Students) at Bharati Vidyapeeth's College of Engineering, Pune Lavale. Organizing technical workshops, hackathons, seminars, and cultural events since 2014. Join 300+ active members shaping the future of computer engineering.",
  keywords: [
    "ACES",
    "ACES BVCOE",
    "Association of Computer Engineering Students",
    "BVCOE",
    "Bharati Vidyapeeth College of Engineering",
    "Bharati Vidyapeeth Pune",
    "BVCOEL",
    "Computer Engineering Pune",
    "Pune Lavale",
    "Tech Club Pune",
    "Engineering Students Association",
    "CSI BVCOE",
    "IEEE BVCOE",
    "Computer Engineering events",
    "BVCOE hackathon",
    "BVCOE workshops",
    "ACES events",
    "ACES team",
    "engineering club Pune",
    "student association computer engineering",
    "BVCOE Lavale Pune",
    "technical events Pune college",
  ],
  authors: [{ name: "ACES BVCOE", url: "https://acesbvcoel.com" }],
  creator: "ACES BVCOE",
  publisher: "Association of Computer Engineering Students, BVCOE",
  category: "Education",
  classification: "Student Organization",
  metadataBase: new URL("https://acesbvcoel.com"),
  alternates: {
    canonical: "https://acesbvcoel.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ACES BVCOE — Association of Computer Engineering Students",
    description:
      "ACES at Bharati Vidyapeeth College of Engineering, Pune Lavale — organizing hackathons, workshops, seminars, and cultural events for 300+ computer engineering students since 2014.",
    url: "https://acesbvcoel.com",
    siteName: "ACES BVCOE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ACES — Association of Computer Engineering Students, Bharati Vidyapeeth College of Engineering Pune",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACES BVCOE — Association of Computer Engineering Students",
    description:
      "ACES at Bharati Vidyapeeth College of Engineering, Pune — organizing hackathons, workshops & events for 300+ computer engineering students since 2014.",
    images: ["/og-image.png"],
    creator: "@acesbvcoe",
    site: "@acesbvcoe",
  },
  icons: {
    icon: [
      { url: "/aceslogo.png", type: "image/png" },
    ],
    apple: [
      { url: "/aceslogo.png", type: "image/png" },
    ],
    shortcut: "/aceslogo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ACES BVCOE — Association of Computer Engineering Students",
  alternateName: ["ACES", "ACES BVCOEL"],
  url: "https://acesbvcoel.com",
  logo: "https://acesbvcoel.com/aceslogo.png",
  image: "https://acesbvcoel.com/og-image.png",
  description:
    "ACES is the student association of the Computer Engineering department at Bharati Vidyapeeth's College of Engineering, Pune Lavale. Founded in 2014, ACES organizes hackathons, workshops, seminars, cultural events, and professional development programs for 300+ students.",
  foundingDate: "2014-09-15",
  foundingLocation: {
    "@type": "Place",
    name: "Bharati Vidyapeeth's College of Engineering, Lavale, Pune, Maharashtra, India",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bharati Vidyapeeth's College of Engineering, Lavale",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "412115",
    addressCountry: "IN",
  },
  telephone: "+91-9404137110",
  memberOf: [
    { "@type": "Organization", name: "Computer Society of India (CSI)" },
    { "@type": "Organization", name: "Institute of Electrical and Electronics Engineers (IEEE)" },
  ],
  sameAs: [
    "https://www.bvcoel.co.in/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ACES BVCOE",
  url: "https://acesbvcoel.com",
  description: "Official website of the Association of Computer Engineering Students at Bharati Vidyapeeth College of Engineering, Pune.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://acesbvcoel.com/events?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${montserrat.variable} font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
