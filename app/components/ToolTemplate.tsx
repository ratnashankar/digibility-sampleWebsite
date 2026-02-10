"use client";

import React, { useState } from "react";
import { CommonGatingForm } from "../components/CommonGatingForm";

import { LucideIcon } from "lucide-react";

interface ToolTemplateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  toolInterface: React.ReactNode;
}

export const ToolTemplate: React.FC<ToolTemplateProps> = ({
  icon: Icon,
  title,
  description,
  toolInterface,
}) => {
  const [unlocked, setUnlocked] = useState(false);

  const handleFormSubmit = async (formData: Record<string, any>) => {
    console.log("Form submitted:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUnlocked(true);
  };

  return (
    <div className="App">
    
      <main className="min-h-screen py-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-white" aria-hidden="true" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {!unlocked ? (
            <CommonGatingForm onUnlock={() => setUnlocked(true)} toolName={title} />
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {toolInterface}
            </div>
          )}
        </div>
      </main>

     
    </div>
  );
};
