"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  MessageSquare,
  Award
} from "lucide-react";

export const INDIAN_FAQS = [
  {
    id: 1,
    category: "Gold Purity & Hallmarking",
    person: {
      name: "Mrs. Sunita & Rajesh Aggarwal",
      initials: "SA",
      location: "India",
      role: "Wedding Jewellery Patron",
    },
    topicTag: "BIS 916 HUID Hallmarked",
    question: "Namaste. We are purchasing bridal jewellery for our daughter's wedding after almost 10 years. Are all your gold ornaments strictly BIS 916 hallmarked, and can we verify the hallmark on the government app or get it tested at an assay center?",
    answer: "Namaste Sunita ji. Bilkul! Every single gold creation at LS Gems and Jewellers carries the mandatory 6-digit alphanumeric HUID (Hallmark Unique Identification) stamped under Bureau of Indian Standards (BIS 916 for 22 Karat gold and BIS 750 for 18 Karat gold). You can download the official 'BIS Care App' on your mobile and scan the code on your invoice to verify the hallmarking center, purity assay, and registration date in real-time. Moreover, we welcome you to test any ornament at any government assaying center in India — if purity is found even 0.01% less, we provide a 100% instant refund plus compensation."
  },
  {
    id: 2,
    category: "Bridal Customization",
    person: {
      name: "Pooja & Rohan Mehta",
      initials: "PM",
      location: "India",
      role: "December Bride",
    },
    topicTag: "Custom Polki Suite",
    question: "My wedding is in December and my bridal lehenga has very specific pastel mint & rani pink embroidery. Can LS Gems and Jewellers customize a syndicate polki & jadau choker to match the exact neckline and colour of my outfit?",
    answer: "Congratulations Pooja ji! Yes, bespoke bridal trousseau is our atelier's greatest specialty. Simply share your lehenga fabric swatch or high-resolution outfit photo. Our resident jewellery designer drafts hand-painted gouache sketches mapped to your neckline, selects unheated Zambian emerald drops or Burmese rubies matching your color palette, and creates a 3D silver/wax model for you to try on in our shop before 22K gold casting begins."
  },
  {
    id: 3,
    category: "Old Gold Exchange",
    person: {
      name: "Rajeshwar Kothari",
      initials: "RK",
      location: "India",
      role: "Family Gold Exchange",
    },
    topicTag: "German XRF Assay",
    question: "Humare paas ancestral family gold jewellery hai jo local family jewellers se li thi. Can we exchange this old 22K/18K gold for new 22K gold bridal polki sets? Melting loss aur deductions ka hisaab kaise hota hai?",
    answer: "Namaste Kothari ji. Yes, we happily accept old gold from any jeweller across India. The purity testing is conducted 100% transparently in front of your eyes using our German XRF (X-Ray Fluorescence) spectrometer — zero acid scratching, zero guesswork, zero unfair deductions. You receive the full current market bullion rate for every gram of pure gold assayed, which is credited 1:1 against your new 22K gold or bridal polki purchase."
  },
  {
    id: 4,
    category: "Net Gold Weight & Billing",
    person: {
      name: "Dr. Radhika & Karthik Iyer",
      initials: "RI",
      location: "India",
      role: "25th Anniversary Gold Buyer",
    },
    topicTag: "Net Weight Transparency",
    question: "We want to purchase a heavy 22K gold Rani Haar with pearls and Meenakari work for our 25th anniversary. How is Gross Weight vs. Net Gold Weight billed so we are not charged gold rates for stones or pearls?",
    answer: "Namaste Dr. Radhika. At LS Gems and Jewellers, we practice 100% net-weight billing transparency. On every handcrafted ornament featuring Basra pearls, Meenakari enamel, or Kundan Polki, the exact weight of all non-gold components is strictly deducted from the gross weight before computing the gold price. Your computerized GST tax invoice clearly prints both Gross Weight (GW) and Net Gold Weight (NW), along with the 6-digit BIS 916 HUID code, so you pay for gold strictly for the pure gold weight."
  },
  {
    id: 5,
    category: "Family Shopping Comfort",
    person: {
      name: "Vikramaditya & Meenakshi Verma",
      initials: "VV",
      location: "India",
      role: "Family Wedding Shopping",
    },
    topicTag: "Family Seating & Care",
    question: "Can we visit with our elderly parents? Due to old age, they need a quiet, comfortable seating space to inspect wedding jewellery at their own pace.",
    answer: "Namaste Verma ji. We deeply respect family traditions and elderly comfort. In our jewellery shop, we offer dedicated, comfortable family seating so you and your elders can sit relaxed without any rush or crowd. Our team presents curated jewellery trays directly at your table with complimentary tea and refreshments so you can view designs at your own pace."
  },
  {
    id: 6,
    category: "Insured Pan-India Delivery",
    person: {
      name: "Amitabh & Shreya Sen",
      initials: "AS",
      location: "India",
      role: "Online Fine Jewellery Collector",
    },
    topicTag: "Armored Delivery & OTP",
    question: "We are ordering a bridal necklace online with delivery across India. How do you ensure safety during courier transit? What if the package is opened, tampered, or misplaced in transit?",
    answer: "Namaste Sen ji. Every shipment across India is dispatched through specialized armored logistics (Brinks, Malca-Amit, and Blue Dart Apex Armoured) inside double-sealed, tamper-evident security containers with active satellite GPS tracking. The parcel is 100% fully insured by us right until you provide the secret OTP in person upon delivery. You carry zero financial or transit risk at any moment."
  }
];

export default function FaqSection({ 
  title = "Frequently Asked Questions", 
  subtitle = "Real Questions Answered for Our Patrons" 
}) {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All", 
    "Gold Purity & Hallmarking", 
    "Bridal Customization", 
    "Old Gold Exchange", 
    "Net Gold Weight & Billing", 
    "Family Shopping Comfort",
    "Insured Pan-India Delivery"
  ];

  const filteredFaqs = activeCategory === "All"
    ? INDIAN_FAQS
    : INDIAN_FAQS.filter((f) => f.category === activeCategory);

  return (
    <section className="py-20 sm:py-24 bg-[#faf8f5] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faf2f4] border border-[#801428]/25 text-[#801428] text-[10.5px] uppercase tracking-[0.25em] font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#801428]" />
            <span>Patron Inquiries & Clarity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-stone-900 tracking-tight leading-snug mb-3">
            {title}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="w-16 h-[1.5px] bg-[#801428] mx-auto mt-5" />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#380c15] via-[#4d101d] to-[#380c15] text-amber-200 border border-amber-400/30 shadow-md font-medium"
                  : "bg-white text-stone-700 hover:text-[#801428] border border-stone-200 hover:border-[#801428]/30 font-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Cards Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl bg-white border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md ${
                  isOpen ? "border-amber-400/80 ring-1 ring-amber-400/20" : "border-stone-200"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#fcfaf7] transition-colors"
                >
                  <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
                    {/* Indian Patron Monogram */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#380c15] to-[#25050c] text-amber-200 border border-amber-400/40 flex items-center justify-center font-serif text-sm sm:text-base font-bold shadow-xs shrink-0 mt-0.5 select-none">
                      {faq.person.name.replace(/^Mrs\.\s*/i, '').replace(/^Dr\.\s*/i, '').trim().charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs sm:text-[13px] font-serif font-bold text-stone-900">
                          {faq.person.name}
                        </span>
                        <span className="text-[10px] text-stone-500 font-light flex items-center gap-1">
                          &bull; {faq.person.location}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 text-[9.5px] uppercase tracking-wider font-medium border border-amber-200/60 shrink-0">
                          {faq.person.role}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-serif font-normal text-stone-800 leading-snug">
                        "{faq.question}"
                      </p>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-900 shrink-0 mt-1 transition-colors">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-amber-800" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Answer with Pure Text & Atelier Assurance (No Stock Photos) */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-stone-100 bg-[#fdfbf8]">
                    <div className="space-y-3.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-stone-200/70">
                        <div className="flex items-center gap-2 text-[#801428] text-xs uppercase tracking-wider font-semibold">
                          <ShieldCheck className="w-4 h-4 text-[#801428]" />
                          <span>Official Atelier Advisory &bull; LS Gems and Jewellers</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300/60 text-[10px] uppercase tracking-wider font-medium">
                          {faq.topicTag}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                        {faq.answer}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-stone-500 font-light border-t border-stone-100">
                        <span className="flex items-center gap-1 text-emerald-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine Atelier Guarantee
                        </span>
                        <span>&bull;</span>
                        <span className="text-stone-600">Direct Jewellery Shop Consultation</span>
                        <span>&bull;</span>
                        <span className="text-[#801428] font-medium">No Franchise Policy</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Helpline Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 text-center shadow-xs">
          <p className="text-xs sm:text-sm text-stone-700 font-light">
            Have a custom bridal or gemstone query of your own? Our Senior Gemologists are available for direct conversation.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919887996201"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#380c15] via-[#4d101d] to-[#380c15] hover:from-[#4d101d] hover:to-[#2a070f] text-amber-200 border border-amber-400/30 text-xs uppercase tracking-wider font-medium inline-flex items-center gap-1.5 shadow-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-300" /> WhatsApp Retail Desk
            </a>
            <a
              href="tel:+919887996201"
              className="px-5 py-2.5 rounded-full bg-stone-50 hover:bg-[#faf2f4] text-stone-800 hover:text-[#801428] border border-stone-200 hover:border-[#801428]/30 text-xs uppercase tracking-wider font-medium transition-all"
            >
              Call +91 98879 96201
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
