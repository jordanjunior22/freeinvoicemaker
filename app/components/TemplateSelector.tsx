"use client";

import React from "react";
import { Monitor, FileText, Layout } from "lucide-react";

export type TemplateType = "classic" | "modern" | "minimalist";

interface TemplateSelectorProps {
  selectedTemplate: TemplateType;
  onSelectTemplate: (template: TemplateType) => void;
}

const templates: { type: TemplateType; icon: React.ReactNode; label: string }[] = [
  { type: "classic", icon: <FileText className="h-5 w-5 mr-2" />, label: "Classic" },
  { type: "modern", icon: <Monitor className="h-5 w-5 mr-2" />, label: "Modern" },
  { type: "minimalist", icon: <Layout className="h-5 w-5 mr-2" />, label: "Minimalist" },
];

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onSelectTemplate,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4">Select Invoice Template</h3>
      <div className="flex flex-wrap gap-4 sm:gap-6">
        {templates.map(({ type, icon, label }) => {
          const isSelected = selectedTemplate === type;
          return (
            <button
              key={type}
              onClick={() => onSelectTemplate(type)}
              className={`flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border transition-all duration-200 w-full sm:w-auto
                ${isSelected
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-white text-gray-800 border-gray-300 hover:shadow-md hover:border-blue-400"
                }`}
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

export default TemplateSelector;
