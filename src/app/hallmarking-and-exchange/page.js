"use client";

import React from "react";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  RefreshCw, 
  Scale, 
  CheckCircle2, 
  Smartphone, 
  Sparkles, 
  ArrowRight,
  Phone
} from "lucide-react";

export default function HallmarkingExchangePage() {
  const hallmarkSteps = [
    {
      symbol: "1",
      title: "BIS Standard Triangle Mark",
      desc: "The official triangular mark indicating certification by the Bureau of Indian Standards (Govt. of India)."
    },
    {
      symbol: "2",
      title: "Purity Grade Stamping",
      desc: "Clear designation of pure gold content: 22K916 (91.6% pure gold) or 18K750 (75.0% pure gold)."
    },
    {
      symbol: "3",
      title: "6-Digit Alphanumeric HUID",
      desc: "A unique laser-inscribed code giving full digital traceability of the ornament's assaying date and center."
    }
  ];

  const bisCareSteps = [
    "Download the official 'BIS Care' app from Google Play Store or Apple App Store.",
    "Click on 'Verify HUID' on the home dashboard.",
    "Enter the 6-digit alphanumeric code stamped on your jewellery or printed on your tax invoice.",
    "Instant verification reveals the registered jeweller, hallmarking center, article type, and certified purity."
  ];

  return (
    <div className="min-h-screen bg-[#f6e6d3] text-stone-900 pb-20">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-br from-[#380c15] via-[#24060d] to-[#180307] text-white pt-14 pb-16 sm:py-20 border-b border-amber-500/25 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-950/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] uppercase tracking-[0.25em] font-semibold mb-4">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Government Certified Trust & Bullion Purity</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4 leading-tight">
            BIS Hallmarking & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500">
              Lifetime Exchange Policy
            </span>
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            At LS Gems and Jewellers, our reputation has been built across 40 years on the bedrock of uncompromised purity, digital HUID verification, and transparent lifetime value.
          </p>
          <div className="w-16 h-[2px] bg-amber-400 mx-auto mt-6" />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 space-y-12">
        
        {/* Hallmarking Section */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#801428] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#801428]" />
              Government Mandated Purity
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Understanding the 3 Symbols of BIS 916 Hallmarking
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Under Bureau of Indian Standards (BIS) directives, all gold jewellery must carry three laser-etched stamps. At LS Gems and Jewellers, every piece is hallmarked before being showcased:
            </p>
          </div>

          {/* 3 Hallmark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hallmarkSteps.map((step) => (
              <div 
                key={step.symbol}
                className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80 flex flex-col justify-between hover:border-amber-400 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#380c15] to-[#25050c] text-amber-300 font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-sm">
                    {step.symbol}
                  </div>
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How to Verify on BIS Care App */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#380c15] via-[#2a070f] to-[#1c0409] text-white space-y-4">
            <div className="flex items-center gap-2.5 text-amber-300">
              <Smartphone className="w-5 h-5" />
              <h3 className="font-serif text-lg font-bold">
                How to Verify Your HUID on the Official "BIS Care" App
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              The Government of India empowers every jewellery buyer with real-time digital verification:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {bisCareSteps.map((text, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Old Gold Exchange & German XRF Spectrometer Section */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#801428] text-xs font-bold uppercase tracking-wider">
              <Scale className="w-4 h-4 text-[#801428]" />
              Non-Destructive Live Assay
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Old Gold Exchange with German XRF Spectrometry
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              Most local jewellers perform destructive acid tests or apply arbitrary 10% - 20% melting loss deductions on your family ancestral gold. At <strong>LS Gems and Jewellers</strong>, we have completely transformed this process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h4 className="font-serif text-base font-bold text-stone-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Live Purity Readout
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Your gold is placed inside our German Fischerscope X-Ray Fluorescence (XRF) spectrometer right in front of you. In 30 seconds, it displays an exact elemental breakdown down to 0.01% purity without scratching, melting, or damaging the item.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h4 className="font-serif text-base font-bold text-stone-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Zero Melting Loss Deduction
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                You receive 100% value for the net weight of pure gold calculated at current market bullion rates. The entire value is credited 1:1 against your purchase of bridal polki suites, temple necklaces, designer kadas, or fresh 22K gold jewellery.
              </p>
            </div>
          </div>
        </div>

        {/* Lifetime Buyback & Maintenance Grid */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#801428] text-xs font-bold uppercase tracking-wider">
              <RefreshCw className="w-4 h-4 text-[#801428]" />
              Enduring Heirloom Value
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Lifetime Care, Buyback & Upgrade Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-stone-200 text-center space-y-2 hover:border-amber-400 transition-all">
              <span className="font-serif text-3xl font-bold text-[#801428] block">100%</span>
              <h4 className="font-serif text-sm font-bold text-stone-900">Gold Value Exchange</h4>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Full market bullion rate on net gold weight during exchange against any fine jewellery.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 text-center space-y-2 hover:border-amber-400 transition-all">
              <span className="font-serif text-3xl font-bold text-[#801428] block">0%</span>
              <h4 className="font-serif text-sm font-bold text-stone-900">Hidden Weight Deductions</h4>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Stone, pearl, and Meenakari weights are strictly separated — you pay gold rate only for net pure gold weight.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 text-center space-y-2 hover:border-amber-400 transition-all">
              <span className="font-serif text-3xl font-bold text-[#801428] block">Free</span>
              <h4 className="font-serif text-sm font-bold text-stone-900">Lifetime Maintenance</h4>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Complimentary ultrasonic bath cleaning, prong inspection, and rhodium replating for life.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-600 font-light">
              Visit our showroom in Churi Bazar, Ajmer for non-destructive XRF assay testing or connect directly with our desk:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link 
                href="/contact" 
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#380c15] to-[#25050c] text-amber-200 text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-sm"
              >
                Visit Ajmer Showroom
              </Link>
              <a 
                href="tel:+919887996201" 
                className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold"
              >
                Retail: +91 98879 96201
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
