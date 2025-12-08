"use client";

import React, { useState } from "react";
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

  const handleDonate = () => {
    window.open("https://www.paypal.com/donate/?hosted_button_id=45H6D5YWWM9YA", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Invoice Maker Pro",
            url: "https://makeinvoice4free.site",
            description:
              "Free online invoice generator for freelancers and businesses. Create invoices instantly and export PDF.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
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

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Create Professional Invoices
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Beautiful templates, instant generation, completely free.
            <span className="block mt-2 text-pink-300 font-semibold">No sign-up required. No hidden fees.</span>
          </p>
        </div>

        {/* Language & Template Selectors */}
        <div className="mb-8 space-y-4">
          {/* <LanguageSelector
            selectedLanguage={language}
            onSelectLanguage={setLanguage}
          /> */}
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
      <section className="container mx-auto px-4 mt-16 text-purple-200 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Why Use Invoice Maker Pro?
        </h2>
        <p className="mb-4">
          Invoice Maker Pro is a free online invoice generator designed for
          freelancers, small businesses, and professionals who need fast,
          clean, and professional invoices. With customizable templates,
          instant PDF downloads, and zero signup requirements, you can
          create invoices in seconds.
        </p>
        <h3 className="text-2xl font-semibold text-white mt-6 mb-4">
          Features of Our Free Invoice Generator
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Professional invoice templates</li>
          <li>Instant PDF export</li>
          <li>Multi-language support</li>
          <li>Works on all devices</li>
          <li>Completely free, no account needed</li>
        </ul>
      </section>

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
                Invoice Maker Pro is a 100% free tool designed to help freelancers,
                small businesses, and professionals create stunning invoices in seconds.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Features</h3>
              <ul className="space-y-2 text-purple-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Multiple professional templates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Multi-language support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Instant PDF generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  No registration needed
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact & Support</h3>
              <p className="text-purple-300 mb-4">
                Have suggestions or feedback? We'd love to hear from you!
              </p>
              <a
                href="mailto:coachcratft.space@gmail.com"
                className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
                coachcratft.space@gmail.com
              </a>
              <div className="mt-6">
                <p className="text-purple-300 mb-3">Love this tool? Help us improve!</p>
                <button
                  onClick={handleDonate}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
                >
                  <Heart className="w-5 h-5" />
                  Support Our Work
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 text-center">
            <p className="text-purple-300">
              © 2024 Invoice Maker Pro. Made with{" "}
              <Heart className="w-4 h-4 inline text-pink-400" /> for the community.
            </p>
            <p className="text-purple-400 mt-2 font-semibold">
              100% Free. Forever.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}