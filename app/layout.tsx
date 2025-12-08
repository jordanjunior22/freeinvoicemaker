import './globals.css'
import { NextIntlClientProvider } from "next-intl";
import en from "./i18n/en.json";
import Script from 'next/script';

export const metadata = {
  title: "Invoice Maker Pro | Free Online Invoice Generator (PDF, Templates)",
  description:
    "Create professional invoices instantly with Invoice Maker Pro. 100% free invoice generator with beautiful templates, no signup, PDF export, and multi-language support.",
  keywords: [
    "invoice generator",
    "invoice maker",
    "free invoice generator",
    "invoice template",
    "create invoice online",
    "download invoice PDF",
    "freelancer invoice",
    "business invoice maker",
    "professional invoice templates"
  ],
  alternates: {
    canonical: "https://makeinvoice4free.site",
  },
  openGraph: {
    title: "Invoice Maker Pro – Free Online Invoice Generator",
    description:
      "Create stunning invoices instantly. No sign-up, no fees, completely free. Export as PDF with professional templates.",
    url: "https://makeinvoice4free.site",
    type: "website",
    siteName: "Invoice Maker Pro",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Maker Pro – Free Online Invoice Generator",
    description:
      "100% free invoice generator with PDF export and professional templates.",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* --- Google Analytics Tag (gtag.js) --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DZ8R7HTPD5"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZ8R7HTPD5');
          `}
        </Script>

        {/* Add Google AdSense meta tag here */}
        <meta name="google-adsense-account" content="ca-pub-5911077996176521" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}
