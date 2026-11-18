"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  ChevronRight, 
  ChevronLeft,
  Gem,
  Heart,
  Eye,
  Star,
  Phone,
  ShieldCheck,
  Award,
  CheckCircle2
} from "lucide-react";
import { 
  HERO_SLIDES,
  PRODUCTS, 
  CATEGORIES, 
  TESTIMONIALS, 
  EDITORIAL_GALLERY 
} from "../data/products";
import { useWishlist } from "../context/WishlistContext";

export default function Hero() {
  const { toggleWishlist, isInWishlist, setSelectedProduct } = useWishlist();

  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Products Tab Filter State
  const [activeTab, setActiveTab] = useState("All");

  // Interactive Gold Karat & Purity Guide State
  const [selectedKarat, setSelectedKarat] = useState("22K (916)");


  // Auto-advance hero slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const filterTabs = ["All", "Bestsellers", "Bridal", "Rare Gems"];

  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Bestsellers") return item.tag.includes("Sovereign") || item.tag.includes("Masterpiece") || item.rating >= 5.0;
    if (activeTab === "Bridal") return item.tag.includes("Bridal") || item.subCategory.includes("Bridal") || item.subCategory.includes("Heirloom") || item.category === "Matha Patti & Tikka";
    if (activeTab === "Rare Gems") return item.tag.includes("Masterpiece") || item.tag.includes("Royal") || item.gemstone.includes("Emerald") || item.gemstone.includes("Polki");
    return true;
  });

  const goldKaratOptions = [
    {
      karat: "24K (999)",
      purity: "99.9% Pure",
      hallmark: "999 Fine Gold",
      usage: "Coins & Bullion",
      tone: "Deep Sovereign Yellow",
      desc: "Purest investment-grade bullion gold and ceremonial sovereign coins, ideal for ancestral wealth preservation and auspicious gifting."
    },
    {
      karat: "22K (916)",
      purity: "91.6% Pure",
      hallmark: "BIS 916 HUID",
      usage: "Bridal & Temple Gold",
      tone: "Rich Warm Heritage Gold",
      desc: "India's premier bridal and heirloom gold standard — crafted for our Royal Rani Haars, Temple Chokers, Matha Pattis, Hathphools, and solid designer kadas."
    },
    {
      karat: "20K (833)",
      purity: "83.3% Pure",
      hallmark: "BIS 833 HUID",
      usage: "Jadau & Polki Setting",
      tone: "Antique Satin Gold",
      desc: "Traditional high-karat alloy offering elevated structural strength for intricate Rajasthani filigree, heavy kundan settings, and elaborate bridal suites."
    },
    {
      karat: "18K (750)",
      purity: "75.0% Pure",
      hallmark: "BIS 750 HUID",
      usage: "Designer & Daily Wear",
      tone: "Lustrous Modern Gold",
      desc: "Contemporary luxury standard blending enduring gold lustre with superior durability for fine Italian links, modern bangles, and everyday elegance."
    },
    {
      karat: "14K (585)",
      purity: "58.5% Pure",
      hallmark: "BIS 585 HUID",
      usage: "Lightweight Daily Wear",
      tone: "Soft Champagne Gold",
      desc: "High-strength everyday gold alloy engineered for ultra-lightweight chains, delicate motifs, and effortless daily wearability."
    }
  ];

  const activeGold = goldKaratOptions.find((g) => g.karat === selectedKarat) || goldKaratOptions[1];


  return (
    <div className="w-full flex flex-col min-h-screen bg-[#f6e6d3] text-stone-900 overflow-x-hidden">
      {/* 1. Hero Carousel Section */}
      <section className="relative w-full min-h-[660px] sm:h-[90vh] sm:min-h-[640px] sm:max-h-[860px] flex items-center overflow-hidden bg-[#f6e6d3]">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive 
                  ? "opacity-100 z-10" 
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Full-bleed Background Image with High-Definition Clarity */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className={`w-full h-full object-cover ${slide.imagePosition || "object-[75%_center] sm:object-[80%_center]"} transition-transform duration-[7000ms] ease-out scale-100 hover:scale-102`}
                />
              </div>

              {/* Ambient Left Scrim Overlay for Crystal-Clear Text Contrast */}
              <div 
                className={`absolute inset-0 pointer-events-none z-10 w-full sm:w-[70%] lg:w-[58%] transition-opacity duration-700 ${
                  slide.isDark 
                    ? "bg-gradient-to-r from-[#12070a]/95 via-[#12070a]/75 to-transparent" 
                    : "bg-gradient-to-r from-[#faf3eb]/95 via-[#faf3eb]/70 to-transparent"
                }`} 
              />

              {/* Left Content - Rich Contextual Showcase */}
              <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md sm:max-w-lg lg:max-w-[480px] py-10 sm:py-12 lg:py-0">
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] tracking-[0.22em] uppercase font-semibold mb-4 shadow-xs transition-colors ${
                    slide.isDark 
                      ? "bg-amber-400/15 border border-amber-400/40 text-amber-200" 
                      : "bg-white/90 border border-stone-200 text-[#801428]"
                  }`}>
                    <Sparkles className={`w-3.5 h-3.5 ${slide.isDark ? "text-amber-300" : "text-[#801428]"} animate-sparkle`} />
                    <span>{slide.tag}</span>
                  </div>

                  <h1 className={`font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight leading-[1.12] mb-4 transition-colors ${
                    slide.isDark ? "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]" : "text-stone-900"
                  }`}>
                    {slide.headline} <br />
                    <span className={slide.isDark ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 font-normal drop-shadow-md" : "text-gold-gleam font-normal"}>
                      {slide.headlineHighlight}
                    </span>
                  </h1>

                  <p className={`text-xs sm:text-[14px] font-normal leading-relaxed max-w-md mb-4 transition-colors ${
                    slide.isDark ? "text-stone-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] font-light" : "text-stone-800 font-light"
                  }`}>
                    {slide.description}
                  </p>

                  {/* Contextual Pieces Checklist Shown In This Banner */}
                  {slide.features && slide.features.length > 0 && (
                    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs max-w-md">
                      {slide.features.map((feat, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center gap-2 py-1 px-2.5 rounded-lg transition-colors ${
                            slide.isDark 
                              ? "text-stone-200 bg-black/40 border border-white/10 shadow-xs" 
                              : "text-stone-800 bg-white/75 border border-stone-200/90 shadow-2xs"
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${slide.isDark ? "bg-amber-400" : "bg-[#801428]"}`} />
                          <span className="font-medium text-[11px] sm:text-[11.5px] tracking-wide">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mini Specification Strip */}
                  {slide.specs && (
                    <div className={`mb-6 pt-2.5 border-t flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] max-w-md ${
                      slide.isDark ? "border-amber-400/20 text-stone-300" : "border-stone-300/80 text-stone-700"
                    }`}>
                      <div>
                        <span className={slide.isDark ? "text-amber-300 uppercase tracking-wider text-[9.5px] font-bold" : "text-[#801428] uppercase tracking-wider text-[9.5px] font-bold"}>
                          Purity:
                        </span>{" "}
                        <span className="font-medium">{slide.specs.purity}</span>
                      </div>
                      <span className={slide.isDark ? "text-amber-400/40" : "text-stone-300"}>•</span>
                      <div>
                        <span className={slide.isDark ? "text-amber-300 uppercase tracking-wider text-[9.5px] font-bold" : "text-[#801428] uppercase tracking-wider text-[9.5px] font-bold"}>
                          Artistry:
                        </span>{" "}
                        <span className="font-medium">{slide.specs.artistry}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md">
                    <Link
                      href={slide.linkHref}
                      className={`w-full sm:w-auto px-6 py-3 rounded-full font-medium text-xs uppercase tracking-[0.16em] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer gold-gleam-btn ${
                        slide.isDark
                          ? "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-stone-950 font-bold border border-amber-300 hover:brightness-110"
                          : "bg-gradient-to-r from-[#380c15] via-[#4f1120] to-[#380c15] hover:from-[#4f1120] hover:to-[#2a070f] text-amber-200 border border-amber-400/40"
                      }`}
                    >
                      <span>{slide.linkText}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${slide.isDark ? "text-stone-950" : "text-amber-300"} group-hover:translate-x-1 transition-transform`} />
                    </Link>
                    <Link
                      href="/contact"
                      className={`w-full sm:w-auto px-6 py-3 rounded-full font-medium text-xs uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 shadow-xs ${
                        slide.isDark
                          ? "bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-amber-300/60 backdrop-blur-xs"
                          : "bg-white/95 hover:bg-[#faf2f4] text-stone-800 hover:text-[#801428] border border-stone-300 hover:border-[#801428]/40"
                      }`}
                    >
                      <Calendar className={`w-3.5 h-3.5 ${slide.isDark ? "text-amber-300" : "text-[#801428]"}`} />
                      <span>Visit Showroom</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Controls (Arrows & Indicators) */}
        <div className="absolute bottom-5 left-4 sm:left-auto sm:right-24 sm:bottom-8 z-30 flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="p-2 sm:p-3 rounded-full bg-white/90 hover:bg-[#380c15] hover:text-amber-200 text-stone-800 border border-stone-200 hover:border-amber-500/30 transition-all cursor-pointer shadow-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="flex gap-1.5 sm:gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? "w-6 sm:w-8 bg-[#801428] shadow-xs" : "w-1.5 sm:w-2 bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="p-2 sm:p-3 rounded-full bg-white/90 hover:bg-[#380c15] hover:text-amber-200 text-stone-800 border border-stone-200 hover:border-amber-500/30 transition-all cursor-pointer shadow-md"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>

      {/* Opulent Infinite Luxury Hallmarks Marquee Ticker */}
      <div className="w-full bg-gradient-to-r from-[#20040a] via-[#380c15] to-[#20040a] text-amber-200 py-3.5 border-y border-amber-500/30 overflow-hidden shadow-inner">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 text-[11px] sm:text-xs font-serif uppercase tracking-[0.22em] select-none">
          <div className="flex items-center gap-8 sm:gap-12 shrink-0">
            <span className="flex items-center gap-2 text-amber-200"><Sparkles className="w-3.5 h-3.5 text-amber-400 animate-sparkle" /> 100% BIS 916 Hallmarked Pure Gold</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-stone-200"><ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> 6-Digit HUID &amp; Live German XRF Gold Assay</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-amber-200"><Award className="w-3.5 h-3.5 text-amber-400" /> 40 Years of Heritage &bull; Est. by Shri Subhash Ji Soni</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-stone-200"><ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> Transparent Gold Rate & Old Gold Exchange</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-amber-200"><Sparkles className="w-3.5 h-3.5 text-amber-400 animate-sparkle-delayed" /> Bespoke Polki & Bridal High Jewellery</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-stone-200"><Gem className="w-3.5 h-3.5 text-amber-300" /> Churi Bazar, Ajmer &bull; Retail & Wholesale</span>
            <span className="text-amber-500/40">✦</span>
          </div>
          <div className="flex items-center gap-8 sm:gap-12 shrink-0" aria-hidden="true">
            <span className="flex items-center gap-2 text-amber-200"><Sparkles className="w-3.5 h-3.5 text-amber-400 animate-sparkle" /> 100% BIS 916 Hallmarked Pure Gold</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-stone-200"><ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> 6-Digit HUID &amp; Live German XRF Gold Assay</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-amber-200"><Award className="w-3.5 h-3.5 text-amber-400" /> 40 Years of Heritage &bull; Est. by Shri Subhash Ji Soni</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-stone-200"><ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> Transparent Gold Rate & Old Gold Exchange</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-amber-200"><Sparkles className="w-3.5 h-3.5 text-amber-400 animate-sparkle-delayed" /> Bespoke Polki & Bridal High Jewellery</span>
            <span className="text-amber-500/40">✦</span>
            <span className="flex items-center gap-2 text-stone-200"><Gem className="w-3.5 h-3.5 text-amber-300" /> Churi Bazar, Ajmer &bull; Retail & Wholesale</span>
            <span className="text-amber-500/40">✦</span>
          </div>
        </div>
      </div>

      {/* 2. Curated Categories - Clean Luxury Champagne Canvas */}
      <section className="py-20 bg-[#f6e6d3] border-b border-[#ebd7c2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#801428] font-bold block mb-2">
              Curated Universes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900">
              Discover By Creation
            </h2>
            <div className="w-16 h-[2px] bg-[#801428] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={category.href || `/collections?category=${encodeURIComponent(category.name)}`}
                className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200 hover:border-[#801428]/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 luxury-card-hover"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-stone-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160408]/95 via-[#1c0409]/60 via-40% to-transparent to-75% pointer-events-none" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-xs font-semibold text-amber-300 tracking-widest uppercase mb-1">
                    {category.count}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-2 mt-1 opacity-90">
                    {category.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-300 font-bold uppercase tracking-wider">
                    <span>Explore Suite</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-amber-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. High Jewellery Editorial Lookbook - Royal Velvet Maroon Statement Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#380c15] via-[#2a070f] to-[#1c0409] text-stone-200 border-b border-amber-500/25 relative overflow-hidden">
        {/* Ambient Subtle Glows */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-rose-950/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-bold block mb-2">
                Editorial Lookbook 2026
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                The Sovereign Campaign
              </h2>
            </div>
            <Link
              href="/collections"
              className="text-xs font-bold text-amber-200 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-amber-400/25 hover:bg-white/10 w-fit"
            >
              <span>Explore High Jewellery Pieces</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-stretch">
            {/* Left Main Featured Card */}
            <div className="md:col-span-7 lg:col-span-8 relative rounded-3xl overflow-hidden group border border-amber-900/40 hover:border-amber-400/70 transition-all duration-700 shadow-lg hover:shadow-2xl h-[360px] sm:h-[440px] lg:h-[480px] bg-[#140307] flex items-center justify-center luxury-card-hover">
              <img
                src={EDITORIAL_GALLERY[0].image}
                alt={EDITORIAL_GALLERY[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140307]/95 via-[#1c0409]/40 via-30% to-transparent to-60% pointer-events-none" />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#28070f]/90 backdrop-blur-md text-amber-200 text-[10px] uppercase font-bold tracking-widest border border-amber-400/30 shadow-md">
                  {EDITORIAL_GALLERY[0].badge}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <p className="text-[11px] text-amber-300 font-semibold uppercase tracking-widest mb-0.5">
                  {EDITORIAL_GALLERY[0].subtitle}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                  {EDITORIAL_GALLERY[0].title}
                </h3>
              </div>
            </div>

            {/* Right Side: 2 Stacked Cards */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4 justify-between h-auto md:h-[440px] lg:h-[480px]">
              {EDITORIAL_GALLERY.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  className="h-[210px] md:h-auto md:flex-1 relative rounded-2xl overflow-hidden group border border-amber-900/40 hover:border-amber-400/70 transition-all duration-700 shadow-md hover:shadow-xl bg-[#140307] flex items-center justify-center luxury-card-hover"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140307]/95 via-[#1c0409]/40 via-30% to-transparent to-60% pointer-events-none" />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#28070f]/90 backdrop-blur-md text-amber-200 text-[9.5px] uppercase font-bold tracking-widest border border-amber-400/30 shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <p className="text-[10px] text-amber-300 font-semibold uppercase tracking-widest mb-0.5">
                      {item.subtitle}
                    </p>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature Masterpieces (The LS Gems Vault) */}
      <section className="py-16 sm:py-20 bg-[#f6e6d3] border-b border-[#ebd7c2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#801428] font-bold block mb-1.5">
                The LS Gems and Jewellers Vault
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900">
                Signature Masterpieces
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#380c15] via-[#4d101d] to-[#380c15] text-amber-200 border border-amber-400/30 shadow-md font-bold"
                      : "bg-white text-stone-700 hover:text-[#801428] border border-stone-200 hover:border-[#801428]/30 shadow-xs"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.slice(0, 8).map((product) => {
              const favorited = isInWishlist(product.id);
              return (
                <div
                  key={product.id}
                  className="group rounded-2xl bg-white border border-stone-200/80 hover:border-[#801428]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 luxury-card-hover"
                >
                  {/* Card Image Container */}
                  <div className="relative aspect-square max-h-[260px] overflow-hidden bg-stone-100 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-gradient-to-r from-[#380c15] via-[#52111f] to-[#380c15] text-amber-200 border border-amber-400/20 text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow">
                      {product.tag}
                    </span>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`absolute top-2.5 right-2.5 p-1.5 rounded-full transition-all cursor-pointer shadow-sm ${
                        favorited
                          ? "bg-[#801428] text-white shadow-md"
                          : "bg-white/90 text-stone-600 hover:text-[#801428] hover:bg-white"
                      }`}
                      aria-label="Toggle wishlist"
                    >
                      <Heart className={`w-3.5 h-3.5 ${favorited ? "fill-white" : ""}`} />
                    </button>

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-stone-900/85 via-stone-900/40 to-transparent flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-1.5 bg-[#380c15] hover:bg-[#20040a] text-amber-100 hover:text-white text-[11px] font-bold rounded-lg border border-amber-400/30 flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer gold-gleam-btn"
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-300" />
                        Quick View & Multi-Angles
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-[10.5px] uppercase tracking-wider mb-1 font-semibold">
                        <span className="text-[#801428] tracking-widest">{product.category}</span>
                        <span className="text-stone-400 font-normal truncate max-w-[130px]">
                          {product.subCategory || "Showroom Selection"}
                        </span>
                      </div>
                      <h3
                        onClick={() => setSelectedProduct(product)}
                        className="font-serif text-base font-bold text-stone-900 hover:text-[#801428] cursor-pointer transition-colors line-clamp-1 mb-1"
                      >
                        {product.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        {product.grossWeight ? (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200/80 text-[9.5px] font-semibold text-amber-900">
                            GW: {product.grossWeight}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-amber-50/70 border border-amber-200/60 text-[9.5px] font-medium text-amber-900 truncate max-w-[170px]">
                            {product.metal || product.carat}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 line-clamp-1 mb-2 font-light">
                        {product.gemstone}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-serif italic text-stone-600">
                        Price on Request
                      </span>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="px-3.5 py-1.5 bg-[#faf2f4] hover:bg-[#380c15] hover:text-amber-100 text-[#801428] text-xs font-semibold rounded-lg border border-[#801428]/20 transition-all cursor-pointer shadow-xs"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#801428]/70 hover:border-[#801428] text-[#801428] hover:bg-[#380c15] hover:text-amber-200 text-xs font-bold uppercase tracking-widest transition-all shadow-sm gold-gleam-btn"
            >
              <span>View All {PRODUCTS.length} Creations in Vault</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Interactive Gold Karat & BIS Purity Visualizer */}
      <section className="py-24 bg-[#f6e6d3] border-y border-[#ebd7c2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#801428] font-bold block mb-2">
              Bullion &amp; Hallmarking Mastery
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900">
              The Gold Karat &amp; Purity Guide
            </h2>
            <p className="text-sm text-stone-600 mt-3 font-normal">
              Understand gold purity, BIS hallmark stamps, and ideal craftsmanship standards across every karat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#2a070f] via-[#20040a] to-[#180307] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl text-white relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Visual Gold Purity Medallion Preview */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#180307]/90 rounded-2xl border border-amber-500/25 text-center relative overflow-hidden shadow-inner">
              <div className="w-48 h-48 rounded-full bg-amber-400/10 border border-amber-400/25 flex items-center justify-center mb-6 relative">
                {/* Rotating Gold Halo Rays */}
                <div className="absolute inset-0 rounded-full animate-spin-slow opacity-25 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(251,191,36,0.5)_45deg,transparent_90deg,rgba(251,191,36,0.5)_135deg,transparent_180deg,rgba(251,191,36,0.5)_225deg,transparent_270deg,rgba(251,191,36,0.5)_315deg,transparent_360deg)] pointer-events-none" />
                <div className="absolute inset-2 rounded-full animate-ping opacity-15 bg-amber-400" />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <Award
                    className="text-amber-300 drop-shadow-[0_0_25px_rgba(251,191,36,0.7)] transition-all duration-500 ease-out animate-sparkle mb-1"
                    style={{
                      width: selectedKarat === "24K (999)" ? "72px" : selectedKarat === "22K (916)" ? "68px" : selectedKarat === "20K (833)" ? "60px" : selectedKarat === "18K (750)" ? "54px" : "48px",
                      height: selectedKarat === "24K (999)" ? "72px" : selectedKarat === "22K (916)" ? "68px" : selectedKarat === "20K (833)" ? "60px" : selectedKarat === "18K (750)" ? "54px" : "48px"
                    }}
                  />
                  <span className="font-serif text-xl font-bold text-amber-200 tracking-wide">
                    {activeGold.purity}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">Active Selection</span>
                <h4 className="font-serif text-2xl font-bold text-white">{activeGold.karat} Gold</h4>
                <p className="text-xs text-stone-300">
                  {activeGold.hallmark} • {activeGold.usage}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-900/30 text-[11px] text-stone-300 flex items-center gap-4">
                <span>Tone: <strong className="text-amber-100">{activeGold.tone}</strong></span>
                <span>Assay: <strong className="text-amber-100">XRF Verified</strong></span>
              </div>
            </div>

            {/* Interactive Karat Selectors */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-bold text-amber-100 uppercase tracking-wider mb-3">
                  Select Gold Karat &amp; Fineness
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {goldKaratOptions.map((opt) => (
                    <button
                      key={opt.karat}
                      onClick={() => setSelectedKarat(opt.karat)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedKarat === opt.karat
                          ? "border-amber-400 bg-[#4a101d] text-amber-100 font-bold shadow-md scale-105"
                          : "border-amber-900/30 bg-[#24060d]/60 text-stone-300 hover:border-amber-600/50 hover:text-white"
                      }`}
                    >
                      <span className="block text-sm font-bold">{opt.karat.split(" ")[0]}</span>
                      <span className="block text-[10px] text-stone-400 mt-0.5">{opt.purity}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1c0409] border border-amber-500/20 shadow-xs">
                <p className="text-xs text-amber-300 font-bold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Master Jeweller Purity Review:
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {activeGold.desc} Every ornament at L.S Gems &amp; Jewellers is laser-inscribed with a 6-digit BIS HUID code verifiable live on the Government BIS Care App.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  href="/collections"
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md text-center hover:brightness-105 gold-gleam-btn"
                >
                  Explore 22K Hallmarked Vault
                </Link>
                <Link
                  href="/hallmarking-and-exchange"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 hover:text-white border border-amber-400/30 text-xs font-semibold uppercase tracking-wider text-center transition-all shadow-xs"
                >
                  BIS HUID &amp; Gold Exchange Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 7. Society Reviews & Testimonials - Clean Luxury Canvas */}
      <section className="py-24 bg-[#f6e6d3] border-t border-[#ebd7c2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#801428] font-bold block mb-2">
              Patrons of Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900">
              Words From Our Collectors
            </h2>
            <div className="w-16 h-[2px] bg-[#801428] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#e5cdb5] flex flex-col justify-between hover:border-[#801428]/40 transition-all hover:shadow-xl group luxury-card-hover"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm sm:text-[14.5px] leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/90 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#380c15] to-[#25050c] text-amber-200 border border-amber-400/40 flex items-center justify-center font-serif text-lg font-bold shadow-xs shrink-0 select-none">
                    {t.name.trim().charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-serif text-base font-bold text-stone-900 leading-tight">{t.name}</h4>
                      <span className="inline-flex items-center gap-0.5 text-[9.5px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded-md shrink-0">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        Verified
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500">{t.location}</p>
                    <p className="text-[11px] text-[#801428] font-semibold mt-0.5">Purchased: {t.jewel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Jewellery Shop Consultation Banner */}
      <section className="py-20 sm:py-24 bg-[#f6e6d3] border-t border-[#ebd7c2] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#380c15] via-[#24060d] to-[#180307] border border-amber-500/35 p-7 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
            {/* Ambient Lighting & Filigree Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-950/40 rounded-full blur-[120px] pointer-events-none" />
            
            {/* Subtle Decorative Gold Watermark Gem */}
            <Gem className="absolute -right-8 -bottom-10 w-64 h-64 text-amber-500/5 pointer-events-none rotate-12" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              {/* Left Column: Information, Perks & CTAs */}
              <div className="lg:col-span-7 space-y-5 text-left">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10.5px] uppercase tracking-[0.24em] font-medium shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Churi Bazar, Ajmer &bull; 40 Years of Trust</span>
                </div>

                {/* Heading */}
                <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-normal text-white leading-[1.18] tracking-tight">
                  Experience A Dedicated <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 font-normal">
                    Showroom Consultation in Ajmer
                  </span>
                </h2>

                {/* Description */}
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light max-w-xl">
                  Located opposite Nagar Nigam at Hotel Ajmer Inn in Churi Bazar, our master jewellers welcome you for personal bridal trousseau consultations, live XRF gold purity testing, and ancestral gold evaluations with unhurried Rajasthani hospitality.
                </p>

                {/* 3 VIP Privileges Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-white/5 border border-amber-400/15 backdrop-blur-xs flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-amber-400/10 text-amber-300 shrink-0">
                      <Gem className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">1-on-1 Viewing</p>
                      <p className="text-[10px] text-stone-400">Retail Desk (Punit Soni)</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-amber-400/15 backdrop-blur-xs flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-amber-400/10 text-amber-300 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">German XRF Assay</p>
                      <p className="text-[10px] text-stone-400">Live Gold Purity Check</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-amber-400/15 backdrop-blur-xs flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-amber-400/10 text-amber-300 shrink-0">
                      <Award className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">Wholesale Bullion</p>
                      <p className="text-[10px] text-stone-400">Wholesale Desk (Pawan Soni)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-[0.18em] rounded-xl shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 group cursor-pointer gold-gleam-btn"
                  >
                    <Calendar className="w-4 h-4 text-stone-950" />
                    <span>Visit Showroom in Ajmer</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-950 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="tel:+919887996201"
                    className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-[0.16em] rounded-xl border border-amber-400/30 hover:border-amber-400 transition-all shadow-xs flex items-center justify-center gap-2 hover:scale-[1.02]"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>Retail: +91 98879 96201</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High Jewellery Visual Showcase Card */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-amber-400/35 shadow-2xl aspect-square max-h-[420px] bg-[#1a050a] flex items-center justify-center luxury-card-hover">
                  <img
                    src="/images/products/necklace-mayur-grand-trousseau-combo.jpg"
                    alt="L.S Gems & Jewellers Showroom Ajmer"
                    className="w-full h-full object-contain p-2 transform transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Floating Status Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full bg-[#180307]/90 backdrop-blur-md border border-amber-400/30 text-amber-200 text-[10px] font-medium flex items-center gap-1.5 shadow-md z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Churi Bazar &bull; Ajmer</span>
                  </div>

                  {/* Floating Bottom Shop Info */}
                  <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#180307]/95 via-[#180307]/70 to-transparent flex flex-col justify-end text-white z-10">
                    <div className="flex items-center justify-between text-xs font-serif mb-0.5">
                      <span className="font-semibold text-amber-200">L.S Gems & Jewellers</span>
                      <span className="text-stone-300 text-[10.5px]">A Unit By Kulthiya</span>
                    </div>
                    <p className="text-[10.5px] text-stone-200 font-light leading-snug">
                      Opp. Nagar Nigam, Hotel Ajmer Inn, Churi Bazar, Ajmer (Raj.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
