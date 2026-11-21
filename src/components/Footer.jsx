"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Truck,
  RefreshCw,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-gradient-to-b from-[#380c15] via-[#2a070f] to-[#1c0409] border-t border-amber-500/25 text-stone-300 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-rose-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="border-b border-amber-900/30 bg-[#22050c]/70 py-8 px-4 sm:px-6 lg:px-8 relative z-10 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center p-3">
            <span className="p-3 rounded-full bg-amber-400/10 text-amber-300 mb-3 border border-amber-400/25">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h4 className="text-sm font-normal tracking-wider text-amber-100 font-sans">
              German XRF Purity Assay
            </h4>
            <p className="text-xs text-stone-300/80 mt-1 font-light leading-relaxed max-w-xs">
              Live non-destructive gold testing with zero melting loss
            </p>
          </div>

          <div className="flex flex-col items-center p-3">
            <span className="p-3 rounded-full bg-amber-400/10 text-amber-300 mb-3 border border-amber-400/25">
              <Award className="w-5 h-5" />
            </span>
            <h4 className="text-sm font-normal tracking-wider text-amber-100 font-sans">
              BIS 916 Hallmarked Gold
            </h4>
            <p className="text-xs text-stone-300/80 mt-1 font-light leading-relaxed max-w-xs">
              Government-stamped 18K and 22K certified purity
            </p>
          </div>

          <div className="flex flex-col items-center p-3">
            <span className="p-3 rounded-full bg-amber-400/10 text-amber-300 mb-3 border border-amber-400/25">
              <Truck className="w-5 h-5" />
            </span>
            <h4 className="text-sm font-normal tracking-wider text-amber-100 font-sans">
              Insured Doorstep Delivery
            </h4>
            <p className="text-xs text-stone-300/80 mt-1 font-light leading-relaxed max-w-xs">
              Tamper-evident armored courier with 100% transit insurance
            </p>
          </div>

          <div className="flex flex-col items-center p-3">
            <span className="p-3 rounded-full bg-amber-400/10 text-amber-300 mb-3 border border-amber-400/25">
              <RefreshCw className="w-5 h-5" />
            </span>
            <h4 className="text-sm font-normal tracking-wider text-amber-100 font-sans">
              Lifetime Care & Exchange
            </h4>
            <p className="text-xs text-stone-300/80 mt-1 font-light leading-relaxed max-w-xs">
              Complimentary ultrasonic cleaning, replating & upgrades
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-10">
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo-mark.png"
                  alt="LS Gems and Jewellers Logo"
                  className="h-11 sm:h-12 w-auto object-contain brightness-105 drop-shadow-md"
                />
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.16em] text-white block">
                    LS GEMS & JEWELLERS
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-amber-300/80 font-medium">
                    Direct Showroom &bull; 40 Years of Heritage
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed max-w-sm font-light">
              For four decades, L.S Gems & Jewellers has stood as an authentic symbol of trust, purity, and master craftsmanship. Founded by Shri Subhash Soni Ji and carried forward across three generations, we craft BIS 916 hallmarked heirlooms that celebrate human milestones.
            </p>

            <div className="pt-2 text-xs text-amber-200/90 font-serif italic">
              "40 वर्षों की गौरवशाली विरासत — विश्वास की अनमोल पहचान"
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/90 mb-4 font-sans">
              Collections
            </h5>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/collections?category=Haar%20%26%20Chokers" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Bridal Rani Haars & Chokers
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Mangalsutras" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Auspicious 22K Gold Mangalsutras
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Gold%20Chains" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Men's Solid Gold Chains
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Kadas%20%26%20Bangles" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Designer Gold Kadas & Bangles
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Men%27s%20Bracelets" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Men's Sovereign Gold Bracelets
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Hathphool" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Imperial Bridal Hathphools
                </Link>
              </li>
              <li>
                <Link href="/collections?category=Matha%20Patti%20%26%20Tikka" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Bridal Matha Patti & Borla
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/90 mb-4 font-sans">
              The House
            </h5>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/about" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Our 40-Year Heritage & Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Shri Subhash Soni Ji Legacy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Master Lapidary & Atelier
                </Link>
              </li>
              <li>
                <Link href="/hallmarking-and-exchange" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  BIS 916 Hallmarking &amp; Exchange Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-300 hover:text-amber-200 font-light tracking-wide transition-colors py-0.5 inline-block">
                  Visit Showroom in Ajmer
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/90 mb-4 font-sans">
              Showroom & Desks
            </h5>
            <div className="space-y-3.5 text-xs sm:text-[13px] text-stone-300 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400/90 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-100 font-semibold">L.S Gems & Jewellers</p>
                  <p className="text-stone-300/90 leading-relaxed mt-0.5">
                    Opp. Nagar Nigam, Hotel Ajmer Inn, Churi Bazar, Ajmer (Raj.)
                  </p>
                  <p className="text-[10px] text-amber-300/80 font-medium mt-1">
                    Direct Showroom &bull; Retail & Wholesale
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-amber-900/30">
                <div className="flex items-center justify-between gap-2 text-[10.5px] sm:text-xs">
                  <span className="text-stone-400 whitespace-nowrap">Retail (Punit Soni Ji):</span>
                  <a href="tel:+919887996201" className="text-amber-300 hover:underline font-medium whitespace-nowrap">
                    +91 98879 96201
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2 text-[10.5px] sm:text-xs">
                  <span className="text-stone-400 whitespace-nowrap">Wholesale (Pawan Soni Ji):</span>
                  <a href="tel:+919413862371" className="text-amber-300 hover:underline font-medium whitespace-nowrap">
                    +91 94138 62371
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2 text-[10.5px] sm:text-xs">
                  <span className="text-stone-400 whitespace-nowrap">Chairman (Subhash Soni Ji):</span>
                  <a href="tel:+919414617887" className="text-amber-300 hover:underline font-medium whitespace-nowrap">
                    +91 94146 17887
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-amber-900/30">
                <p className="text-[10.5px] uppercase tracking-wider text-amber-300/70 font-medium mb-0.5">
                  Showroom Timings:
                </p>
                <p className="text-stone-200 font-light">Mon - Sat: 11:00 AM - 8:00 PM</p>
                <p className="text-amber-300/90 font-light mt-0.5">Sunday by Prior Appointment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-amber-900/30 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 font-light gap-4">
          <p className="text-stone-400 text-center md:text-left">
            © 2026 L.S Gems & Jewellers. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-stone-400 text-xs">
            <Link href="/privacy" className="hover:text-amber-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/hallmarking-and-exchange" className="hover:text-amber-200 transition-colors">
              Hallmarking & Lifetime Exchange
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-amber-900/40 text-center text-[12.5px] sm:text-[13px]">
          <span className="text-stone-200 font-normal">Design and Developed by</span>{" "}
          <a
            href="https://anglobalservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 font-semibold border-b-2 border-amber-400/70 hover:text-amber-100 hover:border-amber-200 transition-colors pb-0.5 tracking-wide inline-block"
          >
            A N Global Services Private Limited
          </a>
        </div>
      </div>
    </footer>
  );
}
