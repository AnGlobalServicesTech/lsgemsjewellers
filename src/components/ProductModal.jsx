"use client";

import React, { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import {
  X,
  Heart,
  ShieldCheck,
  Gem,
  Sparkles,
  Check,
  PhoneCall,
  Calendar,
  Truck,
  RotateCcw,
  ZoomIn,
  Award,
  Layers,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, toggleWishlist, isInWishlist } = useWishlist();
  const [selectedMetal, setSelectedMetal] = useState("22K Yellow Gold");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(null);

  React.useEffect(() => {
    if (!selectedProduct) return;
    setActiveImageIndex(0);
    setDeliveryDate(null);
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProduct, setSelectedProduct]);

  if (!selectedProduct) return null;

  const isFavorited = isInWishlist(selectedProduct.id);
  const gallery = selectedProduct.gallery && selectedProduct.gallery.length > 0
    ? selectedProduct.gallery
    : [selectedProduct.image];

  const handleInquiry = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
    }, 4000);
  };

  const checkDelivery = (e) => {
    e.preventDefault();
    if (pinCode.length >= 4) {
      setDeliveryDate("Insured Pan-India Express Delivery available (3–5 business days)");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-sm transition-all duration-300 animate-fadeIn"
      onClick={() => setSelectedProduct(null)}
    >
      <div
        className="relative w-full max-w-5xl bg-white border border-stone-200 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.25)] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row max-h-[92vh] text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 sm:p-2.5 text-stone-600 hover:text-stone-950 bg-white/95 rounded-full border border-stone-200 hover:border-amber-500 transition-all cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="md:w-1/2 p-4 sm:p-6 bg-[#faf9f6] flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200 shrink-0">
          <div className="relative aspect-square max-h-[380px] sm:max-h-none rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/90 group shadow-sm flex items-center justify-center">
            <img
              src={gallery[activeImageIndex] || selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              {selectedProduct.tag}
            </div>

            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-amber-900 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1.5 shadow-sm">
              <ZoomIn className="w-3.5 h-3.5 text-amber-700" /> High-Def Gem Macro
            </div>
          </div>

          {gallery.length > 1 && (
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-stone-200">
              <span className="text-[10px] uppercase tracking-widest text-stone-500 mr-1 flex items-center gap-1 font-semibold">
                <Layers className="w-3.5 h-3.5 text-amber-700" /> Angles:
              </span>
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-amber-600 scale-105 shadow-md"
                      : "border-stone-200 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-stone-600">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Certified Purity & Assay</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200 shadow-xs">
              <Award className="w-4 h-4 text-amber-700 shrink-0" />
              <span>BIS 916 Pure Hallmarked</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs text-amber-800 tracking-widest uppercase mb-1 font-semibold">
              <span>{selectedProduct.category} • {selectedProduct.subCategory}</span>
              <span className="text-emerald-700 font-bold">{selectedProduct.certification}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-2 leading-tight">
              {selectedProduct.name}
            </h2>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#801428]">
                Price on Request
              </span>
              <span className="text-[10px] bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded font-medium">
                Inclusive of Luxury Insured Shipping & Certification
              </span>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              {selectedProduct.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#faf9f6] border border-stone-200 mb-6 text-xs">
              <div>
                <span className="text-stone-500 block text-[10px] uppercase tracking-wider mb-0.5 font-medium">Gemstone / Artistry</span>
                <span className="font-semibold text-stone-900">{selectedProduct.gemstone}</span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px] uppercase tracking-wider mb-0.5 font-medium">
                  {selectedProduct.netGoldWeight ? "Net Gold Weight (NW)" : "Gold Specification"}
                </span>
                <span className="font-semibold text-stone-900">
                  {selectedProduct.netGoldWeight ? `${selectedProduct.netGoldWeight} (Pure 22K Gold)` : selectedProduct.carat}
                </span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px] uppercase tracking-wider mb-0.5 font-medium">Metal Casting</span>
                <span className="font-semibold text-stone-900">{selectedProduct.metal}</span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px] uppercase tracking-wider mb-0.5 font-medium">
                  {selectedProduct.modelCode ? "Artisan Design Code" : "Origin Grading"}
                </span>
                <span className="font-semibold text-amber-800">{selectedProduct.modelCode || "Natural / Unheated"}</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                Select Custom Precious Metal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {["22K Yellow Gold", "18K Yellow Gold", "18K Rose Gold"].map((metal) => (
                  <button
                    key={metal}
                    type="button"
                    onClick={() => setSelectedMetal(metal)}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedMetal === metal
                        ? "border-amber-600 bg-amber-50 text-amber-900 font-bold shadow-xs"
                        : "border-stone-200 bg-white text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    {metal}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6 p-3.5 rounded-2xl bg-[#faf9f6] border border-stone-200">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-semibold text-stone-800">Insured Armored Transit Check</span>
              </div>
              <form onSubmit={checkDelivery} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter City / Pincode"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="flex-1 bg-white border border-stone-200 rounded-xl px-3 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl border border-stone-300 cursor-pointer"
                >
                  Verify
                </button>
              </form>
              {deliveryDate && (
                <p className="text-[11px] text-emerald-700 mt-2 flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5" /> {deliveryDate}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-stone-200">
            {inquirySent ? (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-center text-emerald-800 text-xs flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                Inquiry registered! Our Master Jeweller will connect with you with full BIS 916 hallmark &amp; weight details.
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/919887996201?text=${encodeURIComponent(
                      `Namaste LS Gems and Jewellers, I would like to inquire about "${selectedProduct.name}"${selectedProduct.modelCode ? ` (Design Code: ${selectedProduct.modelCode})` : ""} in ${selectedMetal}. Please share current price, availability, and certification details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => toggleWishlist(selectedProduct)}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-center cursor-pointer shrink-0 ${
                      isFavorited
                        ? "bg-rose-50 border-rose-300 text-rose-600"
                        : "bg-white border-stone-200 text-stone-600 hover:text-stone-950 hover:border-stone-400"
                    }`}
                    aria-label="Wishlist toggle"
                  >
                    <Heart className={`w-5 h-5 ${isFavorited ? "fill-rose-600" : ""}`} />
                  </button>
                </div>
                <button
                  onClick={handleInquiry}
                  className="w-full py-2.5 px-4 bg-stone-100 hover:bg-[#380c15] hover:text-amber-100 text-stone-800 font-semibold text-xs uppercase tracking-wider rounded-xl border border-stone-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Request In-Shop Viewing / Dossier</span>
                </button>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 pt-1">
              <Link
                href="/contact"
                onClick={() => setSelectedProduct(null)}
                className="flex items-center gap-1.5 hover:text-amber-800 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                Visit Our Jewellery Shop
              </Link>
              <a
                href="tel:+919887996201"
                className="flex items-center gap-1.5 hover:text-amber-800 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
                Retail Desk: +91 98879 96201
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
