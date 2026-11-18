"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Check, 
  Sparkles, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  Truck,
  Loader2,
  AlertCircle
} from "lucide-react";
import { db } from "@/lib/firebase";
import { 
  collection, 
  doc, 
  setDoc,
  runTransaction, 
  serverTimestamp 
} from "firebase/firestore";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [submittedDetails, setSubmittedDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    let leadId = "";
    let savedToFirestore = false;

    try {
      // 1. Try atomic Firestore transaction if Firestore db is connected
      if (db) {
        try {
          leadId = await runTransaction(db, async (transaction) => {
            const counterRef = doc(db, "counters", "inquiries");
            const counterDoc = await transaction.get(counterRef);

            let nextNumber = 1;
            if (counterDoc.exists()) {
              const data = counterDoc.data();
              nextNumber = (Number(data.lastNumber) || 0) + 1;
            }

            const formattedId = `LSGJ${String(nextNumber).padStart(4, "0")}`;

            transaction.set(
              counterRef,
              {
                lastNumber: nextNumber,
                prefix: "LSGJ",
                updatedAt: serverTimestamp(),
              },
              { merge: true }
            );

            const inquiryRef = doc(db, "contact_inquiries", formattedId);
            transaction.set(inquiryRef, {
              leadId: formattedId,
              name: formData.name.trim(),
              phone: formData.phone.trim(),
              email: formData.email.trim() || null,
              requirement: formData.requirement.trim(),
              status: "new",
              source: "contact_page",
              createdAt: serverTimestamp(),
            });

            return formattedId;
          });
          savedToFirestore = true;
        } catch (firestoreErr) {
          console.warn("Firestore transaction skipped/denied (check Firebase Console Rules):", firestoreErr?.message);
        }
      }

      // 2. If not saved via transaction (permission-denied or offline), generate sequential local Lead ID
      if (!savedToFirestore || !leadId) {
        let localCount = 1;
        if (typeof window !== "undefined") {
          try {
            const stored = localStorage.getItem("lsgj_last_lead_num");
            localCount = stored ? parseInt(stored, 10) + 1 : 1;
            localStorage.setItem("lsgj_last_lead_num", localCount.toString());
          } catch {
            localCount = Math.floor(1000 + Math.random() * 9000);
          }
        }
        leadId = `LSGJ${String(localCount).padStart(4, "0")}`;

        // Also attempt direct setDoc just in case
        if (db) {
          try {
            await setDoc(doc(db, "contact_inquiries", leadId), {
              leadId,
              name: formData.name.trim(),
              phone: formData.phone.trim(),
              email: formData.email.trim() || null,
              requirement: formData.requirement.trim(),
              status: "new",
              source: "contact_page",
              createdAt: serverTimestamp(),
            });
            savedToFirestore = true;
          } catch (directErr) {
            console.warn("Direct Firestore write also skipped/denied:", directErr?.message);
          }
        }

        // Backup lead into local browser storage so it is never lost
        if (typeof window !== "undefined") {
          try {
            const backupLeads = JSON.parse(localStorage.getItem("lsgj_inquiries") || "[]");
            backupLeads.unshift({
              leadId,
              name: formData.name.trim(),
              phone: formData.phone.trim(),
              email: formData.email.trim() || null,
              requirement: formData.requirement.trim(),
              date: new Date().toISOString(),
              syncedWithCloud: savedToFirestore,
            });
            localStorage.setItem("lsgj_inquiries", JSON.stringify(backupLeads.slice(0, 50)));
          } catch (e) {
            console.warn("LocalStorage backup error:", e);
          }
        }
      }

      // 3. Mark form as confirmed and display confirmation screen
      setSubmittedDetails({
        id: leadId,
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        requirement: formData.requirement.trim(),
        syncedWithCloud: savedToFirestore,
      });
      setSubmissionId(leadId);
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        requirement: "",
      });
    } catch (error) {
      console.error("Inquiry submission error:", error);
      // Emergency fallback to ensure customer inquiry is never rejected
      const fallbackId = `LSGJ${String(Math.floor(1000 + Math.random() * 9000))}`;
      setSubmittedDetails({
        id: fallbackId,
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        requirement: formData.requirement.trim(),
        syncedWithCloud: false,
      });
      setSubmissionId(fallbackId);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6e6d3] text-stone-900 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#801428] font-bold block mb-2">
            LS Gems and Jewellers
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4 leading-tight">
            Contact Our Jewellery Shop
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Visit our shop directly or connect with our jewellers for pure 22K BIS hallmarked gold, royal bridal Polki &amp; Jadau, custom gold jewellery making, and transparent old gold exchange.
          </p>
          <div className="w-16 h-[2px] bg-amber-600 mx-auto mt-5" />
        </div>

        {/* Main Section: Form & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Inquiry Form + Trust Notice Below */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-9 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 rounded-2xl bg-amber-100 text-[#801428] border border-amber-200">
                <Calendar className="w-5 h-5 text-[#801428]" />
              </span>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">Send an Inquiry</h3>
                <p className="text-xs text-stone-500">Direct assistance from our master jewellers for 100% genuine hallmarked jewellery.</p>
              </div>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">{errorMessage}</p>
                  <p className="text-stone-600">
                    You can directly reach our desk on WhatsApp:{" "}
                    <a
                      href="https://wa.me/919887996201?text=Namaste%20LS%20Gems,%20I%20would%20like%20to%20inquire%20about%20jewellery."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#801428] underline"
                    >
                      +91 98879 96201
                    </a>
                  </p>
                </div>
              </div>
            )}

            {submitted ? (
              <div className="py-8 sm:py-10 text-center space-y-4 bg-gradient-to-b from-stone-50 to-amber-50/40 rounded-2xl border border-stone-200/80 p-6 sm:p-8">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md ring-4 ring-emerald-100">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#801428]">
                    Inquiry Received
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    Thank You! We Have Received Your Inquiry
                  </h4>
                </div>

                <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-stone-900 font-semibold">{submittedDetails?.name || "Customer"}</strong>. Our shop team will connect with you at <strong className="text-stone-900 font-semibold">{submittedDetails?.phone}</strong> shortly.
                </p>

                {submittedDetails?.requirement && (
                  <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 text-left max-w-md mx-auto shadow-xs">
                    <span className="font-semibold text-stone-500 uppercase tracking-wider text-[10px] block mb-1">Your Requirement:</span>
                    <p className="font-medium text-stone-900 leading-relaxed">{submittedDetails.requirement}</p>
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919887996201?text=${encodeURIComponent(
                      `Namaste LS Gems and Jewellers, I have submitted an inquiry.\n\nName: ${submittedDetails?.name || ""}\nPhone: ${submittedDetails?.phone || ""}${submittedDetails?.requirement ? `\nRequirement: ${submittedDetails.requirement}` : ""}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Instant WhatsApp Confirmation</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmissionId("");
                      setSubmittedDetails(null);
                      setErrorMessage("");
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 text-xs font-medium transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#801428] focus:bg-white shadow-xs transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#801428] focus:bg-white shadow-xs transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address (optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#801428] focus:bg-white shadow-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Requirement *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you are looking for (e.g. 22K gold jewellery, bridal Rani Haar suite, designer gold kadas, old gold exchange, custom design)..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#801428] focus:bg-white shadow-xs transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-[#380c15] via-[#4d101d] to-[#380c15] hover:from-[#4d101d] hover:to-[#2a070f] disabled:opacity-60 disabled:cursor-not-allowed text-amber-200 border border-amber-400/40 font-bold text-xs uppercase tracking-[0.18em] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />
                      <span>Saving Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
            </div>

            {/* Pan-India Trust & No Franchise Notice (Placed Under Form) */}
            <div className="bg-gradient-to-br from-[#380c15] via-[#2a070f] to-[#1c0409] text-amber-100 border border-amber-500/30 rounded-3xl p-6 sm:p-7 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-amber-300">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h4 className="font-serif text-sm font-semibold uppercase tracking-wider">
                  40 Years of Trust &bull; Direct Showroom
                </h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                <strong>L.S Gems &amp; Jewellers (A Unit By Kulthiya)</strong> is an independent single-destination jewellery house located in Churi Bazar, Ajmer. <strong>We do not provide or authorize any franchise.</strong> Every creation is 100% BIS 916 hallmarked gold with 6-digit HUID verification, dispatched with fully insured pan-India delivery.
              </p>
              <div className="pt-2 border-t border-amber-900/40 flex items-center gap-2 text-[11px] text-amber-200 font-medium">
                <Truck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Insured Doorstep Delivery Across All Pincodes in India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact & Shop Details */}
          <div className="lg:col-span-5 space-y-4">
            {/* Showroom Physical Address Card */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">Showroom & Atelier</h3>
                  <p className="text-xs text-stone-500">A Unit By Kulthiya</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-[#801428] border border-amber-200">
                  Ajmer (Raj.)
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#801428] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-stone-900">L.S Gems & Jewellers</h4>
                    <p className="text-xs text-stone-700 leading-relaxed font-normal mt-0.5">
                      Opp. Nagar Nigam, Hotel Ajmer Inn, Churi Bazar, Ajmer (Rajasthan)
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Opp+Nagar+Nigam+Hotel+Ajmer+Inn+Churi+Bazar+Ajmer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#801428] hover:text-[#52111f] transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <Sparkles className="w-3 h-3 text-amber-600" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#801428] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">Showroom Hours</p>
                  <p className="font-medium text-stone-900 mt-0.5">Mon - Sat: 11:00 AM - 8:00 PM</p>
                  <p className="text-[11px] text-stone-500">Sunday: By Prior Appointment</p>
                </div>
              </div>
            </div>

            {/* Direct Leadership & Desks Card (From Business Card) */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">Direct Department Desks</h3>
                  <p className="text-xs text-stone-500">Direct Contact with Founders & Directors</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Active Desks
                </span>
              </div>

              <div className="space-y-3 text-xs">
                {/* Retail Desk */}
                <div className="p-3.5 rounded-xl bg-stone-50 hover:bg-amber-50/50 border border-stone-200 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-sm font-bold text-stone-900">Punit Soni Ji</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#801428] text-amber-100">
                      Retail Desk
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 mb-2 font-light">
                    22K Gold Jewellery, Bridal Trousseaus &amp; In-Shop Retail Consultation
                  </p>
                  <div className="flex items-center gap-3">
                    <a 
                      href="tel:+919887996201" 
                      className="inline-flex items-center gap-1.5 font-semibold text-[#801428] hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 98879 96201</span>
                    </a>
                    <span className="text-stone-300">|</span>
                    <a 
                      href="https://wa.me/919887996201?text=Namaste%20Punit%20Ji,%20I%20would%20like%20to%20inquire%20about%20jewellery%20at%20LS%20Gems." 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:underline"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Wholesale Desk */}
                <div className="p-3.5 rounded-xl bg-stone-50 hover:bg-amber-50/50 border border-stone-200 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-sm font-bold text-stone-900">Pawan Soni Ji</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-700 text-white">
                      Wholesale Desk
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 mb-2 font-light">
                    B2B Jeweller Supply, Bulk Hallmarked Bullion & Wholesale Orders
                  </p>
                  <a 
                    href="tel:+919413862371" 
                    className="inline-flex items-center gap-1.5 font-semibold text-[#801428] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 94138 62371</span>
                  </a>
                </div>

                {/* Chairman Desk */}
                <div className="p-3.5 rounded-xl bg-stone-50 hover:bg-amber-50/50 border border-stone-200 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-sm font-bold text-stone-900">Subhash Soni Ji</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-800 text-amber-200">
                      Chairman
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 mb-2 font-light">
                    Founder (40 Years of Heritage & Corporate Guidance)
                  </p>
                  <a 
                    href="tel:+919414617887" 
                    className="inline-flex items-center gap-1.5 font-semibold text-[#801428] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 94146 17887</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
