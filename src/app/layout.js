import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer.js/Footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Bethlehem Lutheran Church",
    template: "%s | Bethlehem Lutheran Church",
  },
  description:
    "Bethlehem Lutheran Church in Baudette, MN. Join us for worship, learn about our beliefs, view events, and contact us.",
  keywords: [
    "Bethlehem Lutheran Church",
    "Baudette",
    "Minnesota",
    "LCMS",
    "Lutheran",
    "worship",
    "calendar",
    "contact",
    "gallery",
  ],
  authors: [{ name: "Bethlehem Lutheran Church" }],
  creator: "Bethlehem Lutheran Church",
  publisher: "Bethlehem Lutheran Church",
  openGraph: {
    type: "website",
    url: "/",
    title: "Bethlehem Lutheran Church",
    description:
      "Bethlehem Lutheran Church in Baudette, MN. Join us for worship, learn about our beliefs, view events, and contact us.",
    siteName: "Bethlehem Lutheran Church",
    images: [
      { url: "/og-default.jpg", width: 1200, height: 630, alt: "Bethlehem Lutheran Church" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bethlehem Lutheran Church",
    description:
      "Bethlehem Lutheran Church in Baudette, MN. Join us for worship, learn about our beliefs, view events, and contact us.",
    images: ["/og-default.jpg"],
    creator: "@bethlehem",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
