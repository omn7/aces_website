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
    default: "ACES — Association of Computer Engineering Students",
    template: "%s | ACES BVCOE",
  },
  description:
    "ACES (Association of Computer Engineering Students) at Bharati Vidyapeeth College of Engineering, Pune Lavale — empowering innovation, collaboration, and technical excellence since 2014.",
  keywords: [
    "ACES",
    "Association of Computer Engineering Students",
    "BVCOE",
    "Bharati Vidyapeeth",
    "Computer Engineering",
    "Pune Lavale",
    "Tech Club",
    "Engineering Students",
  ],
  authors: [{ name: "ACES BVCOE" }],
  metadataBase: new URL("https://aces-bvcoe.vercel.app"),
  openGraph: {
    title: "ACES — Association of Computer Engineering Students",
    description:
      "Empowering innovation, collaboration, and technical excellence at Bharati Vidyapeeth College of Engineering, Pune.",
    url: "https://aces-bvcoe.vercel.app",
    siteName: "ACES BVCOE",
    images: [
      {
        url: "/aceslogo.png",
        width: 512,
        height: 512,
        alt: "ACES Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ACES — Association of Computer Engineering Students",
    description:
      "Empowering innovation, collaboration, and technical excellence at Bharati Vidyapeeth College of Engineering, Pune.",
    images: ["/aceslogo.png"],
  },
  icons: {
    icon: "/aceslogo.png",
    apple: "/aceslogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
