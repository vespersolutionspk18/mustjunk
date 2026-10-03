import type { Metadata } from "next";
import { Figtree, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mustjunkremoval.com"),
  title: `Junk Removal in Los Angeles, CA | ${site.name}`,
  description: `${site.name}. ${site.tagline}. We take away junk, furniture and building debris for homes and businesses across Los Angeles. Free estimates. Licensed and insured. Call ${site.phone}.`,
  keywords: [
    "junk removal Los Angeles",
    "junk hauling LA",
    "dumpster rental Los Angeles",
    "estate clean out LA",
    "hoarder clean out",
    "office junk clean out",
    "junk pickup Los Angeles",
  ],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      "We take away junk and recycling for homes and businesses across Los Angeles. Free estimates. Licensed and insured.",
    url: "https://mustjunkremoval.com",
    siteName: site.name,
    images: ["/Assets/hero-1.jpg"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main">
          Skip to Content
        </a>
        <div id="top" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

