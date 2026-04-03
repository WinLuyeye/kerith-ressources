import "./globals.css";
import { Metadata } from "next";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kerith Resources | Mining Project in DRC",
  description:
    "Kerith Resources is a mining company focused on manganese exploration in Kongo-Central, DRC. Discover a high-potential mining project driven by sustainability and innovation.",
  
  keywords: [
    "Mining DRC",
    "Manganese Congo",
    "Kerith Resources",
    "Mining Project Africa",
    "Kongo Central mining",
    "Manganese exploration"
  ],

  authors: [{ name: "Kerith Resources" }],
  creator: "Kerith Resources",

  openGraph: {
    title: "Kerith Resources Mining Project",
    description:
      "High-potential manganese mining project in the Democratic Republic of Congo.",
    url: "https://kerithresourcesdrc.com",
    siteName: "Kerith Resources",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kerith Mining Project",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kerith Resources Mining Project",
    description:
      "Explore a high-potential mining project in the DRC.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mulish.variable}`}>
        {children}
      </body>
    </html>
  );
}