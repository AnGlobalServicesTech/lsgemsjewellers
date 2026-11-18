"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWishlist } from "../context/WishlistContext";
import {
  Heart,
  Menu,
  X,
  Phone,
  Gem,
  Sparkles,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Search
} from "lucide-react";
import { PRODUCTS } from "../data/products";

export default function Header() {
  const pathname = usePathname();
  const { wishlist, setIsWishlistOpen, setSelectedProduct } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Our Heritage", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const searchResults = searchQuery.trim() === ""
    ? []
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.gemstone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.modelCode && p.modelCode.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#24060d] via-[#380c15] to-[#24060d] text-[#f7e7ce] text-[9.5px] sm:text-[10.5px] py-1.5 px-3 sm:px-6 border-b border-amber-500/20 tracking-[0.05em] sm:tracking-[0.09em] font-normal overflow-hidden shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 whitespace-nowrap">
          <div className="flex items-center gap-1.5 text-[#fbf5eb] shrink-0">
            <ShieldCheck className="w-3 h-3 text-amber-300 shrink-0" />
            <span>
              <span className="hidden sm:inline font-light">100% 6-Digit HUID Verified &bull; </span>
              <strong className="font-medium text-amber-200">BIS 916 Hallmarked Gold</strong>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-[10px] text-[#f0e2cd] font-light shrink-0">
            <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
            <span>Complimentary Insured Pan-India Delivery &bull; Lifetime Care</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-[9.5px] sm:text-[10px]">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1 text-amber-300 hover:text-white transition-colors font-medium"
            >
              <Calendar className="w-3 h-3 text-amber-300" />
              <span>Book Visit</span>
            </Link>
            <span className="hidden sm:inline text-amber-500/30">|</span>
            <a
              href="tel:+919887996201"
              className="flex items-center gap-1 text-[#fbf5eb] hover:text-amber-200 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>+91 98879 96201</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          scrolled
            ? "bg-white/98 backdrop-blur-md py-3 sm:py-3.5 shadow-[0_8px_30px_rgba(56,12,21,0.08)] border-b border-[#e2cfb7]"
            : "bg-white py-4 sm:py-5 shadow-[0_4px_20px_rgba(56,12,21,0.05)] border-b border-[#ebd7c2]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <Link
              href="/"
              className="flex items-center group shrink-0"
              aria-label="LS Gems and Jewellers Home"
            >
              <div className="relative h-10 sm:h-12 md:h-14 w-auto flex items-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/logo-mark.png"
                  alt="LS Gems and Jewellers Logo"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-xs"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 mx-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`group/link text-[12.5px] xl:text-[13px] uppercase tracking-[0.22em] transition-all py-1.5 relative ${
                      isActive
                        ? "text-[#801428] font-semibold"
                        : "text-stone-700 hover:text-[#801428] font-medium"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#801428] via-[#a81c37] to-[#801428] rounded-full shadow-xs" />
                    ) : (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover/link:w-full h-[1.5px] bg-[#801428]/40 transition-all duration-300" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center justify-end gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-stone-200/90 hover:border-[#801428]/40 flex items-center justify-center text-stone-700 hover:text-[#801428] hover:bg-[#faf2f4] transition-all cursor-pointer shrink-0 shadow-xs"
                title="Search jewels"
                aria-label="Search jewels"
              >
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-stone-200/90 hover:border-[#801428]/40 flex items-center justify-center text-stone-700 hover:text-[#801428] hover:bg-[#faf2f4] transition-all cursor-pointer shrink-0 shadow-xs"
                title="View Curations"
                aria-label="Wishlist"
              >
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {mounted && wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-[#801428] text-amber-100 text-[8.5px] sm:text-[9.5px] font-bold flex items-center justify-center shadow-xs border border-amber-300/40">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#380c15] via-[#4d101d] to-[#380c15] hover:from-[#4d101d] hover:to-[#2a070f] text-amber-200 border border-amber-400/40 shadow-sm hover:shadow-md transition-all cursor-pointer shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>Book Visit</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#faf2f4] border border-[#801428]/35 lg:hidden flex items-center justify-center text-[#801428] hover:bg-[#801428] hover:text-white transition-all cursor-pointer shrink-0 shadow-xs"
                aria-label="Toggle navigation"
                title="Open menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#801428]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {searchOpen && (
          <div className="absolute top-full left-0 w-full bg-[#fdfcf9] border-b border-amber-900/15 shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-4 sm:p-6 transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Rani Haars, Chokers, Matha Pattis, Hathphools, Gold Kadas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-white border border-stone-200/90 rounded-full pl-12 pr-16 py-3 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 shadow-xs tracking-wide"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-800/80" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-[11px] uppercase tracking-wider cursor-pointer font-light"
                  >
                    Clear
                  </button>
                )}
              </div>

              {searchQuery && (
                <div className="mt-4 max-h-72 overflow-y-auto space-y-2 pr-1">
                  {searchResults.length === 0 ? (
                    <p className="text-stone-500 text-xs py-3 text-center font-light">No jewellery pieces matched your query.</p>
                  ) : (
                    searchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setSelectedProduct(item);
                          setSearchOpen(false);
                        }}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white hover:bg-[#faf6ee] cursor-pointer border border-stone-200/70 hover:border-amber-600/40 transition-all shadow-xs"
                      >
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-serif text-stone-900 truncate">{item.name}</p>
                          <p className="text-[11px] text-stone-500 font-light">{item.gemstone} &bull; {item.carat}</p>
                        </div>
                        <span className="text-xs font-serif italic text-stone-600 shrink-0">Price on Request</span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )}

      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-black/40 backdrop-blur-xs flex justify-end">
          <div
            className="absolute inset-0"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-[320px] xs:max-w-[340px] h-full bg-[#f6e6d3] shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-amber-900/15 z-10">
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#ebd7c2] bg-white sticky top-0 z-20">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
                aria-label="LS Gems and Jewellers Home"
              >
                <img
                  src="/images/logo-mark.png"
                  alt="LS Gems and Jewellers Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-700 hover:text-[#801428] hover:bg-[#faf2f4] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3 flex-1 overflow-y-auto">
              <p className="text-[10.5px] font-semibold text-[#801428] uppercase tracking-[0.28em] mb-3">
                Menu & Collections
              </p>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-[14.5px] font-serif transition-colors ${
                      isActive
                        ? "bg-[#faf2f4] text-[#801428] border border-[#801428]/30 font-semibold shadow-xs"
                        : "text-stone-800 hover:bg-stone-50 font-normal"
                    }`}
                  >
                    <span className="tracking-wider">{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#801428]/70" />
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsWishlistOpen(true);
                }}
                className="w-full flex items-center justify-between py-3.5 px-4 rounded-xl text-[14.5px] font-serif text-stone-800 hover:bg-stone-50 font-normal transition-colors cursor-pointer text-left"
              >
                <span className="flex items-center gap-2.5 tracking-wider">
                  <Heart className="w-4 h-4 text-[#801428]" />
                  <span>My Wishlist & Curations</span>
                </span>
                {wishlist.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-[#801428] text-amber-100 text-[10px] font-bold border border-amber-300/40">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </div>

            <div className="p-5 border-t border-[#ebd7c2] bg-white space-y-3.5">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-gradient-to-r from-[#380c15] via-[#4d101d] to-[#380c15] text-amber-200 border border-amber-400/40 font-semibold text-center text-xs uppercase tracking-[0.2em] rounded-full shadow-md flex items-center justify-center gap-2 hover:brightness-105 transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-300" /> Visit Our Jewellery Shop
              </Link>
              <div className="text-center text-[10.5px] text-stone-500 space-y-1 font-light">
                <p>L.S Gems & Jewellers &bull; Churi Bazar, Ajmer (Raj.)</p>
                <p className="text-[9.5px] text-amber-900 font-medium tracking-wide">40 Years of Heritage &bull; Retail & Wholesale</p>
                <div className="flex items-center justify-center gap-3 pt-0.5">
                  <a href="tel:+919887996201" className="text-[#801428] font-semibold hover:underline">
                    Retail Desk: +91 98879 96201
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
