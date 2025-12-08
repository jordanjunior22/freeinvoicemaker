"use client";

import React from "react";
import { Globe, Flag } from "lucide-react";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onSelectLanguage: (lang: string) => void;
}

const languages: { code: string; label: string; icon: React.ReactNode }[] = [
  { code: "en", label: "English", icon: <Globe className="h-5 w-5 mr-2" /> },
  { code: "es", label: "Spanish", icon: <Flag className="h-5 w-5 mr-2" /> },
  { code: "fr", label: "French", icon: <Flag className="h-5 w-5 mr-2" /> },
  { code: "ar", label: "Arabic", icon: <Globe className="h-5 w-5 mr-2" /> },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onSelectLanguage,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4">Select Language</h3>
      <div className="flex gap-6 flex-wrap">
        {languages.map(({ code, label, icon }) => {
          const isSelected = selectedLanguage === code;
          return (
            <button
              key={code}
              onClick={() => onSelectLanguage(code)}
              className={`flex items-center px-5 py-3 rounded-2xl border transition-all duration-200
                ${isSelected
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-white text-gray-800 border-gray-300 hover:shadow-md hover:border-blue-400"}`}
            >
              {icon}
              <span className="font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
