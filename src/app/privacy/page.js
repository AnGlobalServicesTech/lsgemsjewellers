"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Database, 
  UserCheck, 
  Mail, 
  Phone 
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f6e6d3] text-stone-900 pb-20">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-br from-[#380c15] via-[#24060d] to-[#180307] text-white pt-14 pb-16 sm:py-20 border-b border-amber-500/25 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-950/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] uppercase tracking-[0.25em] font-semibold mb-4">
            <Lock className="w-3.5 h-3.5 text-amber-300" />
            <span>Patron Data Protection</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4 leading-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500">Policy</span>
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            At LS Gems and Jewellers, the discretion and confidentiality of our patrons are as sacred as our craft. Read our comprehensive data protection commitment.
          </p>
          <div className="w-16 h-[2px] bg-amber-400 mx-auto mt-6" />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
          
          {/* Section 1 */}
          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <UserCheck className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                1. Information We Collect
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              To provide personalized fine jewellery services, schedule in-shop jewellery viewings, and issue statutory GST tax invoices, <strong>LS Gems and Jewellers</strong> may collect:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li><strong>Contact Details</strong>: Name, phone number, email address, and consultation preferences submitted via our appointment form.</li>
              <li><strong>Billing & Statutory Details</strong>: Name, PAN card (for high-value jewelry transactions exceeding statutory thresholds mandated by the Government of India / Income Tax Department), and delivery address.</li>
              <li><strong>Bespoke Design Specifications</strong>: Preferred ring sizes, metal choices (22K / 18K / Platinum), gemstone requirements, and commemorative engravings.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <Database className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                2. How Your Information is Utilized
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Your personal information is utilized strictly to deliver luxury fine jewellery services:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li>To confirm your appointment schedule and reserve private family lounge viewings.</li>
              <li>To prepare customized gouache illustrations and 3D CAD models for bespoke commissions.</li>
              <li>To generate computer-printed GST invoices and register mandatory BIS HUID hallmarking records.</li>
              <li>To coordinate 100% insured armored courier transit with OTP delivery verification.</li>
              <li>To provide invitations to private gem exhibitions (only if you opt-in to the LS Gems and Jewellers Circle).</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <EyeOff className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                3. Strict Non-Disclosure & Confidentiality
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              We uphold uncompromising confidentiality standards. <strong>LS Gems and Jewellers will never sell, rent, trade, or distribute your personal details to third-party telemarketers, brokers, or external advertising networks.</strong>
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Information is shared only with strictly authorized operational partners:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li>Armored transit logistics carriers (Brinks, Malca-Amit, Blue Dart) solely for secure delivery execution.</li>
              <li>Statutory government regulatory authorities (Bureau of Indian Standards, GST Department) only when legally mandated.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <ShieldCheck className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                4. Data Security & Encryption
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              We employ enterprise-grade security architecture:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li>All web traffic between your browser and our website is protected using 256-bit TLS/SSL encryption.</li>
              <li>Appointment lead data is stored in enterprise Google Cloud Firestore databases protected by strict role-based access controls and encrypted at rest.</li>
              <li>Our team undergoes rigorous data security training to ensure confidentiality for high-profile patrons.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <Lock className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                5. Patron Rights & Consent
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              You retain complete rights over your personal data:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li>You may request a copy of your appointment records or invoice history at any time.</li>
              <li>You may unsubscribe from our VIP Circle communications with a single click or WhatsApp reply.</li>
              <li>You may request the deletion of non-statutory records by writing to our shop desk.</li>
            </ul>
          </div>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h3 className="font-serif text-base font-bold text-stone-900">
              Patron Privacy Assistance
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              For any questions regarding your data, privacy protection, or appointment records, please reach out directly:
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
              <a 
                href="tel:+919887996201" 
                className="flex items-center gap-2 text-[#801428] font-semibold hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>Retail Desk: +91 98879 96201</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
