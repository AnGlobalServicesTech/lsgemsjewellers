"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  Gem, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Calendar, 
  Sparkles, 
  Scale, 
  Truck, 
  MessageSquare,
  Building2,
  Users,
  MapPin,
  Clock,
  HeartHandshake
} from "lucide-react";

export default function AboutPage() {
  const leadership = [
    {
      name: "Shri Subhash Soni Ji",
      role: "Chairman & Founder",
      phone: "+91 94146 17887",
      desc: "Founded the house nearly 40 years ago, establishing the bedrock of pure gold and silver craftsmanship grounded in honesty, hard work, and unshakeable customer trust.",
      badge: "Founding Visionary"
    },
    {
      name: "Shri Pawan Soni Ji",
      role: "Wholesale & Bullion Operations",
      phone: "+91 94138 62371",
      desc: "Steering the wholesale vertical with expansive market presence, certified bullion sourcing, and B2B jeweller relationships built on transparency and integrity.",
      badge: "Wholesale Desk"
    },
    {
      name: "Shri Punit Soni Ji",
      role: "Retail & Bespoke High Jewellery",
      phone: "+91 98879 96201",
      desc: "Leading the retail showroom and private bridal consultations, infusing modern aesthetics, 22K sculpted gold kadas, and exquisite bridal polki craftsmanship.",
      badge: "Retail Desk"
    }
  ];

  const pillars = [
    {
      icon: Award,
      title: "BIS 916 & 750 Hallmarking",
      desc: "Every gold creation is stamped with the triangular BIS mark, metal purity (22K916 / 18K750), and unique 6-digit HUID code verifiable instantly on the Government BIS Care app."
    },
    {
      icon: Gem,
      title: "100% Pure 22K Heritage Craftsmanship",
      desc: "Every bridal Rani Haar, temple choker, mathapatti, and designer kada is handcrafted in pure BIS 916 hallmarked gold with authentic Rajasthani Meenakari and Jadau artistry."
    },
    {
      icon: Scale,
      title: "German XRF Gold Valuation",
      desc: "We test ancestral gold live in front of you using non-destructive X-ray spectrometers — zero arbitrary melting losses, zero hidden deductions."
    },
    {
      icon: Truck,
      title: "100% Insured Pan-India Delivery",
      desc: "Dispatched in serialized tamper-evident security parcels via armored logistics partners (Brinks, Blue Dart Apex Armoured) with full transit insurance."
    },
    {
      icon: ShieldCheck,
      title: "Direct Single Showroom in Ajmer",
      desc: "We operate directly from our iconic Churi Bazar showroom in Ajmer with no third-party resellers or unauthorized franchise markups. Retail & wholesale direct."
    },
    {
      icon: Sparkles,
      title: "Transparent Lifetime Care & Exchange",
      desc: "Transparent buyback and exchange policies based on prevailing market rates, accompanied by complimentary ultrasonic cleaning and lifetime inspection."
    }
  ];

  const specializations = [
    {
      title: "Designer Kadas & Hathphools",
      desc: "Greek-key carved gold kadas, temple jaali heritage bangles, and imperial bridal jadau hathphools in 22K gold.",
      link: "/collections?category=Bracelets"
    },
    {
      title: "Royal Bridal Polki & Jadau",
      desc: "Authentic uncut syndicate polki, 22K hallmarked gold filigree, and heirloom bridal chokers crafted for weddings.",
      link: "/collections?category=Necklaces"
    },
    {
      title: "Bridal Matha Patti & Tikka",
      desc: "Traditional Rajasthani borlas, chand-jhumki sheeshpattis, and polki-studded bridal maang tikkas.",
      link: "/collections?category=Matha%20Patti%20%26%20Tikka"
    },
    {
      title: "Bespoke Bridal Trousseaus",
      desc: "Custom collaborative design service to match the exact neckline, embroidery, and colors of your bridal attire.",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6e6d3] text-stone-900 pb-20">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-br from-[#380c15] via-[#24060d] to-[#180307] text-white pt-16 pb-20 sm:py-24 border-b border-amber-500/25 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-950/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] uppercase tracking-[0.25em] font-semibold mb-4 shadow-xs">
            <span>A Unit By Kulthiya</span>
            <span className="text-amber-500/60">•</span>
            <span>Churi Bazar, Ajmer</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white mb-5 leading-[1.15] tracking-tight">
            40 Years of Glorious Heritage, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 font-normal">
              A Priceless Symbol of Trust
            </span>
          </h1>

          <p className="text-amber-200/90 font-serif italic text-base sm:text-lg mb-3">
            "40 वर्षों की गौरवशाली विरासत — विश्वास की अनमोल पहचान"
          </p>

          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Founded nearly 40 years ago by revered Shri Subhash Soni Ji, L.S Gems & Jewellers has flourished across three generations into Rajasthan's trusted bastion of BIS 916 hallmarked purity, wholesale excellence, and exquisite bespoke bridal artistry.
          </p>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Heritage Story & Three Generations of Pride */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-[#801428] border border-amber-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#801428]" />
              Our Story, Our Values & Our Pride
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Four Decades of Passion, Integrity & Craft
            </h2>
            <div className="w-16 h-[2px] bg-[#801428] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
              <p>
                The glorious journey of <strong>L.S Gems & Jewellers</strong> commenced nearly <strong>40 years ago</strong>, when revered founder <strong>Shri Subhash Soni Ji</strong> envisioned a fine jewellery house built upon tireless perseverance, dedication, and uncompromising honesty. Laying the bedrock of pure gold and silver craftsmanship, he established a distinguished legacy whose greatest treasure has always been the enduring trust, warmth, and complete satisfaction of our patrons.
              </p>

              <p>
                The responsibility of carrying forward this priceless heritage was gracefully embraced by his two sons, <strong>Shri Pawan Soni Ji</strong> and <strong>Shri Punit Soni Ji</strong>. Drawing upon their father's profound wisdom, family values, and commercial integrity, both brothers infused modern vision, contemporary designs, and youthful dynamism — elevating L.S Gems & Jewellers to ever-greater heights across wholesale and retail realms.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf2f4] border-l-4 border-[#801428] text-stone-800 space-y-2">
                <p className="font-serif italic text-xs sm:text-[13.5px] leading-relaxed text-[#801428]">
                  "Today, L.S Gems & Jewellers is far more than a fine jewellery establishment; it stands as a living symbol of three generations of values, decades of dedication, familial unity, and unbroken customer trust. We hold firm to the belief that jewellery is not crafted from gold and silver alone; it embodies deep human emotions, cherished familial relationships, and timeless memories preserved for a lifetime."
                </p>
              </div>

              <p className="text-stone-600">
                Four decades on, our singular founding pledge remains untouched: <strong>Exceptional Quality, Radical Transparency, Absolute Honesty, and Everlasting Customer Trust</strong>. <em>"Your Trust Is Our Most Priceless Heritage."</em>
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/35 shadow-xl aspect-square bg-[#06152b] flex items-center justify-center">
                <img
                  src="/images/products/necklace-zewar-gulab-choker.jpg"
                  alt="LS Gems & Jewellers Royal Temple Choker Suite"
                  className="w-full h-full object-contain p-2"
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#06152b]/95 via-[#06152b]/70 to-transparent flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between text-xs mb-0.5">
                    <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold">
                      Four Decades of Trust
                    </span>
                    <span className="text-amber-200/80 text-[10px] font-mono">Est. 1986</span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white">L.S Gems & Jewellers</h4>
                  <p className="text-[11px] text-stone-300 font-light">Churi Bazar, Ajmer (Rajasthan)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#801428] block">40+</span>
                  <span className="text-[11px] font-semibold text-stone-800">Years of Heritage</span>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#801428] block">3</span>
                  <span className="text-[11px] font-semibold text-stone-800">Generations of Values</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Desks Card (From Official Visiting Card) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#801428] font-bold block mb-2">
              A Unit By Kulthiya
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
              Leadership & Direct Desks
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              Direct master jeweller assistance for retail patrons, wholesale partners, and custom commissions.
            </p>
            <div className="w-16 h-[2px] bg-amber-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div 
                key={person.name}
                className="p-6 rounded-2xl bg-white border border-stone-200/90 hover:border-amber-400 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 text-[#801428] border border-amber-200 text-[10px] font-bold uppercase tracking-wider">
                      {person.badge}
                    </span>
                    <HeartHandshake className="w-4 h-4 text-amber-600" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#801428] mb-3">
                    {person.role}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal mb-5">
                    {person.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <a
                    href={`tel:${person.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#801428] hover:text-[#52111f] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#801428]" />
                    <span>{person.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Core Pillars of Trust */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#801428] font-bold block mb-2">
              Why Patrons Trust Us
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
              The Six Pillars of Transparency
            </h2>
            <div className="w-16 h-[2px] bg-amber-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border border-stone-200/90 hover:border-amber-400/80 transition-all shadow-xs hover:shadow-md space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#801428] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#801428]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Specializations */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#801428] font-bold block mb-2">
              Atelier Collections
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
              What We Create & Curate
            </h2>
            <div className="w-16 h-[2px] bg-amber-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec) => (
              <div
                key={spec.title}
                className="p-6 rounded-2xl bg-white border border-stone-200/90 flex flex-col justify-between hover:border-amber-400 transition-all shadow-xs"
              >
                <div>
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal mb-4">
                    {spec.desc}
                  </p>
                </div>
                <Link
                  href={spec.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#801428] hover:text-[#52111f] transition-colors"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Showroom Location Banner in Ajmer */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#380c15] via-[#24060d] to-[#180307] text-white border border-amber-500/35 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10.5px] uppercase tracking-wider font-semibold">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>Showroom Destination in Ajmer</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white leading-tight">
              Visit Our Showroom & Atelier in Ajmer
            </h3>
            
            <p className="text-amber-200 font-medium text-sm sm:text-base">
              Opp. Nagar Nigam, Hotel Ajmer Inn, Churi Bazar, Ajmer (Raj.)
            </p>

            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Experience personalized hospitality, live non-destructive German XRF gold purity testing, BIS 916 HUID verification, and customized bridal trousseau consultations with our master jewellers.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:brightness-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-stone-950" />
                <span>Visit Showroom / Get Directions</span>
              </Link>

              <a
                href="tel:+919887996201"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Retail Desk: +91 98879 96201</span>
              </a>

              <a
                href="https://wa.me/919887996201?text=Namaste%20LS%20Gems%20and%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
