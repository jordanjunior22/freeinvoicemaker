"use client";

import React, { useEffect, useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";
import TemplateSelector from "./components/TemplateSelector";
import LanguageSelector from "./components/LanguageSelector";
import { Invoice } from "./lib/types";
import { Heart, Sparkles, Mail } from "lucide-react";

export default function HomePage() {
  const [invoice, setInvoice] = useState<Invoice | undefined>(undefined);
  const [template, setTemplate] = useState<"classic" | "modern" | "minimalist">("classic");
  const [language, setLanguage] = useState<string>("en");
    const [isMobile, setIsMobile] = useState(false);
 // 🔥 Detect mobile or tablet screens
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  // 🔥 If mobile/tablet → Show message
  if (isMobile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 text-center">
        <div className="bg-black/30 px-8 py-10 rounded-2xl border border-purple-500/40 shadow-lg max-w-md">
          <Sparkles className="w-10 h-10 text-purple-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-4">Please Use a PC</h1>
          <p className="text-purple-200 text-lg leading-relaxed">
            Invoice Maker Pro works best on desktop screens.  
            For the full experience, please open this website on a PC or laptop.
          </p>
        </div>
      </div>
    );
  }
  const handleDonate = () => {
    window.open("https://www.paypal.com/donate/?hosted_button_id=45H6D5YWWM9YA", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* JSON-LD Schema (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Invoice Maker Pro",
            url: "https://makeinvoice4free.site",
            description:
              "Free online invoice maker, invoice generator, and PDF creator for freelancers and businesses.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            keywords:
              "online invoice maker, invoice maker online free, invoice generator free, free invoice app, receipt maker",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Header */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Invoice Maker Pro
                </h1>
                <p className="text-purple-300 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  100% Free Forever
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:coachcratft.space@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-lg text-purple-200 hover:text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Suggestions</span>
              </a>

              <button
                onClick={handleDonate}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="w-4 h-4" />
                Donate
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section (SEO Optimized) */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Free Online Invoice Maker & PDF Generator
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Create invoices instantly using our free invoice generator. Customize templates,
            download as PDF, and manage everything online — no signup required.
            <span className="block mt-2 text-pink-300 font-semibold">Fast. Simple. Professional.</span>
          </p>
        </div>

        {/* Language & Template Selectors */}
        <div className="mb-8 space-y-4">
          <TemplateSelector
            selectedTemplate={template}
            onSelectTemplate={setTemplate}
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          <InvoiceForm onChange={setInvoice} />
          <InvoicePreview invoice={invoice} template={template} />
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 mt-16 text-purple-200 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Free Online Invoice Generator — Fast, Simple, Professional
        </h2>
        <p className="mb-4">
          Invoice Maker Pro is a powerful and free invoice maker built for freelancers,
          small businesses, and professionals who need high-quality invoices quickly.
          Create unlimited invoices with our easy-to-use invoice generator and download
          them instantly as PDFs.
        </p>

        <h3 className="text-2xl font-semibold text-white mt-6 mb-4">
          Why Millions Search for “Online Invoice Maker”
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>100% Free invoice generator</li>
          <li>Works instantly — no account needed</li>
          <li>Professional invoice templates</li>
          <li>Perfect for freelancers & small businesses</li>
          <li>Supports tax, discounts, logos, & more</li>
        </ul>

        <h3 className="text-2xl font-semibold text-white mt-6 mb-4">
          Additional Tools Included
        </h3>
        <p>
          Invoice Maker Pro also functions as a free <strong>receipt maker</strong>,
          <strong> bill maker</strong>, and <strong>PDF generator</strong>. Create
          clean, professional documents in seconds — completely free.
        </p>
      </section>

      {/* Footer */}
     {/* Footer */}
<footer className="bg-black/40 backdrop-blur-lg border-t border-purple-500/20 mt-16">
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          About Us
        </h3>
        <p className="text-purple-300 leading-relaxed">
          Invoice Maker Pro is a 100% free tool designed to help freelancers
          and businesses create beautiful invoices in seconds.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">Features</h3>
        <ul className="space-y-2 text-purple-300">
          <li>Professional templates</li>
          <li>Instant PDF downloads</li>
          <li>Multi-language support</li>
          <li>No registration needed</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">Contact & Support</h3>
        <a
          href="mailto:coachcratft.space@gmail.com"
          className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors"
        >
          <Mail className="w-5 h-5" />
          coachcratft.space@gmail.com
        </a>

        <div className="mt-6">
          <p className="text-purple-300 mb-3">Love this tool? Support our work!</p>
          <button
            onClick={handleDonate}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg text-white font-semibold shadow-lg"
          >
            <Heart className="w-5 h-5" />
            Donate
          </button>
        </div>
      </div>
    </div>

    {/* LEGAL LINKS */}
    <div className="border-t border-purple-500/20 pt-6">
      <div className="flex flex-col md:flex-row justify-center gap-6 text-center mb-6">
        <a
          href="/privacy-policy"
          className="text-purple-300 hover:text-white transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="text-purple-300 hover:text-white transition-colors"
        >
          Terms & Conditions
        </a>
        <a
          href="/cookie-policy"
          className="text-purple-300 hover:text-white transition-colors"
        >
          Cookie Policy
        </a>
      </div>

      <p className="text-purple-300 text-center">
        © {new Date().getFullYear()} Invoice Maker Pro. Made with{" "}
        <Heart className="w-4 h-4 inline text-pink-400" /> for the community.
      </p>
      <p className="text-purple-400 mt-2 font-semibold text-center">
        Always Free. Forever.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}
