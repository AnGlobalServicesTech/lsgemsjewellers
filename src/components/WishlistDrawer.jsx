"use client";

import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { X, Trash2, ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WishlistDrawer() {
  const { wishlist, removeFromWishlist, isWishlistOpen, setIsWishlistOpen, setSelectedProduct } = useWishlist();

  React.useEffect(() => {
    if (!isWishlistOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setIsWishlistOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isWishlistOpen, setIsWishlistOpen]);

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-3 sm:pl-10">
        <div className="w-screen max-w-md bg-white border-l border-stone-200 shadow-2xl flex flex-col justify-between text-stone-900">
          <div className="p-6 border-b border-stone-200 bg-[#faf8f5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-100 text-amber-800">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Your Saved Curations</h3>
                <p className="text-xs text-stone-500">{wishlist.length} {wishlist.length === 1 ? "masterpiece" : "masterpieces"} selected</p>
              </div>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4 border border-stone-200">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg text-stone-900 font-bold mb-2">No Jewels Saved Yet</h4>
                <p className="text-sm text-stone-500 max-w-xs mb-6">
                  Explore our high jewellery collections and click the heart icon to curate your personal viewing list.
                </p>
                <Link
                  href="/collections"
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 gold-shimmer-btn text-white text-sm font-semibold rounded-xl transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  Explore Collections <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex gap-4 items-center group hover:border-amber-400/60 hover:bg-amber-50/20 transition-all shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover cursor-pointer border border-stone-200"
                    onClick={() => {
                      setSelectedProduct(item);
                      setIsWishlistOpen(false);
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h5
                      onClick={() => {
                        setSelectedProduct(item);
                        setIsWishlistOpen(false);
                      }}
                      className="text-sm font-semibold text-stone-900 truncate cursor-pointer hover:text-amber-800"
                    >
                      {item.name}
                    </h5>
                    <p className="text-xs text-stone-500">{item.gemstone}</p>
                    <p className="text-xs font-serif italic text-stone-600 mt-1">
                      Price on Request
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {wishlist.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-[#faf8f5] space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span>Bespoke Valuation</span>
                <span className="font-semibold text-stone-900">Available on Request</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsWishlistOpen(false)}
                className="w-full py-3 gold-shimmer-btn font-bold text-sm tracking-wide rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Inquire / Visit Shop for Saved Items
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
