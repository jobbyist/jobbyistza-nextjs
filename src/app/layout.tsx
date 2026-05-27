import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "SA's Job Discovery & Career Management Platform | Jobbyist",
  description:
    "Browse 1000s of verified job listings in Johannesburg, Cape Town, Durban & Pretoria. Find the best opportunities and career management tools for South Africa….",
  authors: [{ name: "Jobbyist" }],
  keywords: [
    "jobs in South Africa",
    "SA jobs",
    "Johannesburg jobs",
    "Cape Town jobs",
    "Durban jobs",
    "Pretoria jobs",
    "South African careers",
    "employment SA",
    "job vacancies South Africa",
    "work in South Africa",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://za.jobbyist.africa/",
    locale: "en_ZA",
    siteName: "Jobbyist",
    title: "SA's Job Discovery & Career Management Platform | Jobbyist",
    description:
      "Browse 1000s of verified job listings in Johannesburg, Cape Town, Durban & Pretoria. Find the best opportunities and career management tools for South Africa….",
    images: [
      "https://storage.googleapis.com/gpt-engineer-file-uploads/iy019M6SqjMXyibDc8dgs2v9PSx1/social-images/social-1767047331245-jobbyistpwa.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Jobbyist",
    title: "SA's Job Discovery & Career Management Platform | Jobbyist",
    description:
      "Browse 1000s of verified job listings in Johannesburg, Cape Town, Durban & Pretoria. Find the best opportunities and career management tools for South Africa….",
    images: [
      "https://storage.googleapis.com/gpt-engineer-file-uploads/iy019M6SqjMXyibDc8dgs2v9PSx1/social-images/social-1767047331245-jobbyistpwa.png",
    ],
  },
  other: {
    "impact-site-verification": "28ed7022-a952-47d9-8668-60577bab1517",
    "geo.region": "ZA",
    "geo.placename": "South Africa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="canonical" href="https://za.jobbyist.africa/" />
        <link
          rel="preconnect"
          href="https://vkwnhhwacizjiwusbmcm.supabase.co"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link
          rel="dns-prefetch"
          href="https://storage.googleapis.com"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://storage.googleapis.com/gpt-engineer-file-uploads/iy019M6SqjMXyibDc8dgs2v9PSx1/uploads/1767047314357-jobbyistpwa.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#9b87f5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Jobbyist" />
        <link rel="apple-touch-icon" href="/jobbyistpwa.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1237323355260727"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jobbyist",
              url: "https://za.jobbyist.africa/",
              description: "South Africa's premier job discovery platform",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://za.jobbyist.africa/jobs?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jobbyist",
              url: "https://za.jobbyist.africa/",
              logo: "https://za.jobbyist.africa/logo.png",
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
              },
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
