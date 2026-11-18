"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Scale,
  FileText,
  RefreshCw,
  Truck,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Phone
} from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f6e6d3] text-stone-900 pb-20">
      <section className="relative bg-gradient-to-br from-[#380c15] via-[#24060d] to-[#180307] text-white pt-14 pb-16 sm:py-20 border-b border-amber-500/25 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-950/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] uppercase tracking-[0.25em] font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Patron Charter & Legal Governance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4 leading-tight">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500">Conditions</span>
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to LS Gems and Jewellers. Our customer charter guarantees absolute purity, transparent gold rates, and government HUID hallmarking compliance across India.
          </p>
          <div className="w-16 h-[2px] bg-amber-400 mx-auto mt-6" />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">

          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <Award className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                1. BIS Hallmarking & 6-Digit HUID Compliance
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Every gold article crafted and presented at <strong>LS Gems and Jewellers</strong> is strictly hallmarked under the Bureau of Indian Standards (BIS) regulations. We manufacture exclusively in <strong>22 Karat (916 purity)</strong> and <strong>18 Karat (750 purity)</strong> hallmarked gold.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li>Each ornament is laser-stamped with the triangular BIS logo, purity designation (e.g. 22K916), and a unique 6-digit alphanumeric <strong>HUID (Hallmark Unique Identification)</strong> code.</li>
              <li>Patrons are encouraged to verify this code using the Government of India’s official <strong>BIS Care Mobile App</strong>, which displays the assaying center details, registration date, and certified metal purity.</li>
              <li>We offer an unconditional guarantee: if any item is proven to have lower purity than stamped by any government-approved assaying center, we issue an instant 100% refund plus compensation.</li>
            </ul>
          </div>

          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <Sparkles className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                2. Gold Craftsmanship, Polki &amp; Gemstone Authenticity
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              We craft our heritage bridal and designer collections in pure 22K and 18K BIS hallmarked gold accented with traditional syndicate Polki, authentic Rajasthani Meenakari enamel, and natural precious stones.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li>Every gold ornament is assayed for purity using non-destructive <strong>German XRF Spectrometry</strong> before hallmarking and showroom presentation.</li>
              <li>Non-gold elements such as Basra seed pearls, Meenakari enamel, and Kundan Polki settings are separately weighed and deducted from Gross Weight on your GST invoice.</li>
              <li>All precious ruby, emerald, and pearl accents are ethically sourced and verified by our master jewellers for natural hue and craftsmanship integrity.</li>
            </ul>
          </div>

          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <Scale className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                3. Transparent Pricing & Computerized Tax Invoices
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              We practice 100% billing transparency. Every purchase is documented with an authorized GST tax invoice clearly breaking down:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li><strong>Gross Weight vs. Net Gold Weight</strong>: All stone, pearl, and enamel weights are strictly deducted before calculating gold price. You pay for metal only for the net gold weight.</li>
              <li><strong>Real-Time Bullion Rate</strong>: Gold rates are pegged to the daily Indian bullion market rate displayed transparently on our shop rate board.</li>
              <li><strong>Making Charges</strong>: Clearly itemized either per gram or per piece depending on intricate handcrafting.</li>
              <li><strong>GST Compliance</strong>: Legitimate 3% Goods & Services Tax (GST) is applied in accordance with Indian tax statutes.</li>
            </ul>
          </div>

          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <RefreshCw className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                4. Lifetime Exchange & 100% Buyback Policy
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Jewellery is an enduring family asset. We honor your investment with a transparent lifetime exchange policy:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li><strong>Gold Exchange</strong>: 100% credit of the net gold weight calculated at the prevailing market gold rate on the date of return, after computerized purity assay on our German XRF spectrometer. Zero arbitrary melting loss deductions.</li>
              <li><strong>Hallmarked Gold Buyback</strong>: Receive transparent prevailing market value for undamaged BIS 916 / 750 hallmarked gold ornaments purchased from LS Gems and Jewellers with original tax invoice.</li>
              <li><strong>Old Gold from Other Jewellers</strong>: We accept gold purchased from any jeweller across India. Gold purity is tested non-destructively in front of your eyes using our spectrometer.</li>
            </ul>
          </div>

          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <Truck className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                5. Insured Pan-India Transit & Secure Delivery
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              For patrons ordering online or requesting home delivery across India:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li>All shipments are dispatched through specialized armored logistics partners (Brinks, Malca-Amit, Blue Dart Apex Armoured) in tamper-evident, serialized security boxes.</li>
              <li>Every parcel carries 100% transit insurance paid by LS Gems and Jewellers until successful handoff.</li>
              <li>Deliveries require OTP verification and a valid government photo ID upon physical delivery.</li>
            </ul>
          </div>

          <div className="space-y-3 pb-8 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-100 text-[#801428]">
                <FileText className="w-5 h-5 text-[#801428]" />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                6. Bespoke Commissions & Bridal Trousseau Orders
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Custom designs (bridal Rani Haars, temple gold chokers, custom designer kadas, matching bridal sets) undergo a collaborative atelier process:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 font-light list-disc pl-5">
              <li>Custom orders commence upon receipt of a 30% advance deposit.</li>
              <li>Clients approve hand-painted gouache illustrations and 3D CAD renders before metal casting begins.</li>
              <li>Custom-commissioned pieces customized with personal engravings or unique bridal sizing are non-refundable once casting is authorized, but remain eligible for our Lifetime Exchange program.</li>
            </ul>
          </div>

          <div className="space-y-3 p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
            <div className="flex items-center gap-2.5 text-[#801428]">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <h3 className="font-serif text-lg font-bold">
                7. Single Jewellery Shop Declaration (No Authorized Franchises)
              </h3>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              <strong>LS Gems and Jewellers</strong> operates as an independent, single-destination luxury jewellery house in India. <strong>We do not authorize, operate, or license any franchise branches or third-party resellers.</strong> Any entity claiming to be an authorized franchise or representative of LS Gems and Jewellers is fraudulent. Please conduct all consultations and purchases directly via our official jewellery shop, website, or verified contact desk.
            </p>
          </div>

          <div className="pt-4 text-center space-y-2">
            <p className="text-xs text-stone-500">
              Have questions regarding our terms, certifications, or custom orders?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+919887996201"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#801428] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Retail Desk: +91 98879 96201</span>
              </a>
              <span className="text-stone-300">|</span>
              <Link
                href="/contact"
                className="text-xs font-semibold text-[#801428] hover:underline"
              >
                Book a Private Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
