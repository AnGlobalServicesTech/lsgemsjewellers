"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function FloatingContact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const phoneNumber = "+919887996201";
  const displayPhone = "+91 98879 96201";
  const whatsappUrl = `https://wa.me/919887996201?text=Namaste%20LS%20Gems,%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collection.`;

  if (!mounted) {
    return null;
  }

  return (
    <aside
      aria-label="Direct Shop Contacts"
      className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3 print:hidden pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.65)] transition-all duration-300 hover:scale-105 cursor-pointer animate-pulse-ring-green border border-emerald-500/30 p-2 sm:p-3"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (Retail Desk: +91 98879 96201)"
      >
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 animate-ping opacity-75" />
        <img
          src="/images/whatsapp-icon.png"
          alt="WhatsApp Chat"
          className="w-full h-full object-contain select-none pointer-events-none drop-shadow-xs"
        />
      </a>

      <a
        href={`tel:${phoneNumber}`}
        className="group w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#380c15] via-[#4d101d] to-[#25050c] hover:from-[#4d101d] hover:to-[#1f0309] text-amber-300 border border-amber-400/50 flex items-center justify-center shadow-[0_8px_20px_rgba(56,12,21,0.5)] hover:shadow-[0_10px_25px_rgba(56,12,21,0.7)] transition-all duration-300 hover:scale-105 cursor-pointer animate-pulse-ring-maroon"
        aria-label={`Call Retail Desk at ${displayPhone}`}
        title={`Call Retail Desk (${displayPhone})`}
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
      </a>
    </aside>
  );
}
