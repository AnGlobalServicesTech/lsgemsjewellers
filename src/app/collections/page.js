"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { 
  Filter, 
  Search, 
  Heart, 
  Eye, 
  SlidersHorizontal, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  RotateCcw,
  ChevronDown,
  Award,
  Truck,
  Gem,
  ArrowRight
} from "lucide-react";
import { PRODUCTS } from "../../data/products";
import { useWishlist } from "../../context/WishlistContext";

export default function CollectionsPage() {
  const { toggleWishlist, isInWishlist, setSelectedProduct } = useWishlist();

  // Filters state
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMetal, setSelectedMetal] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = ["All", "Necklaces", "Bracelets", "Matha Patti & Tikka"];
  const metals = [
    "All",
    "22K BIS Hallmarked Gold",
  ];

  // Sync initial category from URL query string (e.g. /collections?category=Necklaces)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get("category");
    if (catParam && categories.includes(catParam)) {
      setSelectedCategory(catParam);
    }
  }, []);

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== "All") {
        if (selectedCategory === "Matha Patti & Tikka") {
          if (!item.category.includes("Matha Patti") && !item.category.includes("Tikka")) return false;
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }
      // Metal filter
      if (selectedMetal !== "All" && !item.metal.toLowerCase().includes(selectedMetal.toLowerCase().split(" ")[0])) {
        return false;
      }
      // Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesGem = item.gemstone.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        const matchesSub = item.subCategory.toLowerCase().includes(query);
        const matchesCode = item.modelCode ? item.modelCode.toLowerCase().includes(query) : false;
        if (!matchesName && !matchesGem && !matchesCat && !matchesSub && !matchesCode) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, selectedMetal, sortBy, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedMetal("All");
    setSortBy("featured");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#f6e6d3] text-stone-900 pb-20">
      {/* Royal Velvet Maroon Header Banner */}
      <section className="relative bg-gradient-to-br from-[#380c15] via-[#24060d] to-[#180307] text-white pt-14 pb-16 sm:py-20 border-b border-amber-500/25 overflow-hidden">
        {/* Ambient Filigree Lighting & Watermark */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-950/40 rounded-full blur-[120px] pointer-events-none" />
        <Gem className="absolute -right-10 -bottom-10 w-72 h-72 text-amber-500/5 pointer-events-none rotate-12" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Gold Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] uppercase tracking-[0.25em] font-semibold mb-4 shadow-xs animate-float">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>The Vault &bull; India</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight tracking-tight">
            Curated High{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 font-normal">
              Jewellery Collection
            </span>
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Every creation is individually handcrafted in our atelier featuring traditional Rajasthani Meenakari, antique Kundan-Polki artistry, and 100% BIS 916 hallmarked pure 22K gold.
          </p>

          {/* Quick Perks Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-amber-200/90 font-light">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-amber-400/15 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>100% Pure 22K Gold</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-amber-400/15 backdrop-blur-xs">
              <Award className="w-4 h-4 text-amber-300" />
              <span>BIS 916 HUID Hallmarked</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-amber-400/15 backdrop-blur-xs">
              <Truck className="w-4 h-4 text-amber-300" />
              <span>Insured Pan-India Express Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Luxury Filter Controls Bar */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-6 mb-8 shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Category Quick Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-[#380c15] via-[#4d101d] to-[#380c15] text-amber-200 border border-amber-400/40 shadow-sm scale-105"
                      : "bg-stone-50 hover:bg-stone-100 text-stone-700 hover:text-stone-950 border border-stone-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input with Gold Accents */}
            <div className="relative w-full lg:w-72">
              <input
                type="text"
                placeholder="Search Rani Haars, Polki, Matha Pattis, Kadas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-4 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#801428] focus:bg-white shadow-xs transition-colors"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Sort & Filter Dropdown Toggle */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-stone-500 hidden sm:inline font-medium">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-stone-50 border border-stone-200 text-stone-800 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#801428] cursor-pointer shadow-xs"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 hover:text-stone-950 flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#801428]" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Secondary Filter Dropdown (Metals & Reset) */}
          <div className={`mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 ${showMobileFilters ? "block" : "hidden lg:flex"}`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-stone-500 mr-2 flex items-center gap-1 font-medium">
                <Filter className="w-3.5 h-3.5 text-[#801428]" /> Metal Setting:
              </span>
              {metals.map((metal) => (
                <button
                  key={metal}
                  onClick={() => setSelectedMetal(metal)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                    selectedMetal === metal
                      ? "bg-[#380c15] text-amber-200 border border-amber-400/40 font-semibold shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-transparent"
                  }`}
                >
                  {metal}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-500">
              <span>Showing <strong className="text-[#801428] font-bold">{filteredProducts.length}</strong> creations</span>
              {(selectedCategory !== "All" || selectedMetal !== "All" || searchQuery !== "" || sortBy !== "featured") && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-[#801428] hover:text-[#550c1b] font-bold transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
            <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-4 animate-pulse" />
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">No Curations Match Your Filter</h3>
            <p className="text-sm text-stone-500 max-w-md mx-auto mb-6">
              Try adjusting your search criteria or resetting filters to view all pieces in our high jewellery vault.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-gradient-to-r from-[#380c15] via-[#4d101d] to-[#380c15] text-amber-200 border border-amber-400/40 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-105 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const favorited = isInWishlist(product.id);
              return (
                <div
                  key={product.id}
                  className="group rounded-2xl bg-white border border-stone-200 hover:border-amber-400/60 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5"
                >
                  {/* Card Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Royal Velvet Maroon Badge */}
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-[#380c15] to-[#4d101d] text-amber-200 border border-amber-400/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md z-10">
                      {product.tag}
                    </span>

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:scale-110 z-10 ${
                        favorited
                          ? "bg-[#801428] text-white shadow-md"
                          : "bg-white/90 text-stone-600 hover:text-[#801428] hover:bg-white"
                      }`}
                      aria-label="Toggle wishlist"
                    >
                      <Heart className={`w-4 h-4 ${favorited ? "fill-white" : ""}`} />
                    </button>

                    {/* Quick View Hover Action */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#180307]/90 via-[#24060d]/60 to-transparent flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-105 text-stone-950 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-stone-950" />
                        <span>Quick View & Multi-Angles</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category & SubCategory Row */}
                      <div className="flex items-center justify-between gap-2 text-[10.5px] uppercase tracking-wider mb-1.5">
                        <span className="font-bold text-[#801428] tracking-widest">{product.category}</span>
                        <span className="text-stone-400 font-medium truncate max-w-[140px]">
                          {product.subCategory || "22K Pure"}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => setSelectedProduct(product)}
                        className="font-serif text-base font-bold text-stone-900 hover:text-[#801428] cursor-pointer transition-colors line-clamp-1 mb-1.5"
                      >
                        {product.name}
                      </h3>

                      {/* Weight / Specification Badge */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                        {product.grossWeight ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200/80 text-[10px] font-semibold text-amber-900 tracking-tight">
                            <span className="text-amber-700 font-normal">GW:</span> {product.grossWeight}
                            {product.netGoldWeight && (
                              <>
                                <span className="text-amber-300">•</span>
                                <span className="text-amber-700 font-normal">NW:</span> {product.netGoldWeight}
                              </>
                            )}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-50/70 border border-amber-200/60 text-[10px] font-medium text-amber-900 truncate max-w-[190px]">
                            {product.metal || product.carat}
                          </span>
                        )}
                        {product.modelCode && (
                          <span className="px-1.5 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-[9.5px] font-mono text-stone-600 truncate max-w-[120px]">
                            {product.modelCode}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-stone-500 line-clamp-2 mb-3 font-light leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-serif italic text-stone-600">
                        Price on Request
                      </span>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="px-4 py-1.5 bg-[#380c15] hover:bg-[#4d101d] text-amber-200 border border-amber-400/30 text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer shadow-xs"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Certificate Guarantee Callout (Royal Maroon & Champagne Gold) */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#380c15] via-[#24060d] to-[#180307] border border-amber-500/35 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="flex items-center gap-5 relative z-10">
            <span className="p-4 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-amber-300 shrink-0 shadow-md">
              <ShieldCheck className="w-8 h-8 text-amber-300 animate-pulse" />
            </span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">The LS Gems and Jewellers Gold Purity Guarantee</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl font-light leading-relaxed">
                Every 22K gold creation carries the mandatory BIS 916 hallmark and unique 6-digit alphanumeric HUID code, verifiable in real-time on the official Government BIS Care App.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-lg hover:brightness-105 hover:scale-105 cursor-pointer relative z-10 flex items-center gap-2"
          >
            <span>Consult Master Jeweller</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
