import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import WishlistDrawer from "../components/WishlistDrawer";
import FloatingContact from "../components/FloatingContact";
import { WishlistProvider } from "../context/WishlistContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://lsgemsjewellers.com"),
  title: {
    default: "L.S Gems & Jewellers | 40 Years of Heritage & Trust | Ajmer",
    template: "%s | L.S Gems & Jewellers",
  },
  description: "L.S Gems & Jewellers — 40 years of glorious heritage in Churi Bazar, Ajmer. 100% BIS 916 hallmarked pure 22K gold, royal bridal polki suites, designer gold kadas, and wholesale bullion.",
  keywords: [
    "LS Gems and Jewellers",
    "LS Gems Ajmer",
    "L.S Gems and Jewellers Ajmer",
    "Churi Bazar Ajmer",
    "BIS 916 Hallmarked Gold",
    "22K Gold Bridal Jewellery",
    "Royal Rani Haar & Chokers",
    "Polki Jadau Bridal Jewellery",
    "Designer 22K Gold Kadas",
    "Wholesale Jewellers Rajasthan",
    "Rajasthani Matha Patti & Hathphool",
    "HUID Verified Gold India"
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "L.S Gems & Jewellers | 40 Years of Heritage & Trust | Ajmer",
    description: "40 years of glorious heritage founded by Shri Subhash Soni Ji. BIS 916 hallmarked pure 22K gold, designer kadas, and bespoke bridal heirlooms in Churi Bazar, Ajmer.",
    url: "https://lsgemsjewellers.com",
    siteName: "L.S Gems & Jewellers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 700,
        height: 350,
        alt: "LS Gems and Jewellers Brand Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L.S Gems & Jewellers | 40 Years of Heritage & Trust | Ajmer",
    description: "40 years of glorious heritage founded by Shri Subhash Soni Ji. BIS 916 hallmarked pure 22K gold, designer kadas, and bespoke bridal heirlooms in Churi Bazar, Ajmer.",
    images: ["/images/logo.jpg"],
  },
};

const jewelryStoreSchema = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "name": "L.S Gems & Jewellers",
  "alternateName": "LS Gems & Jewellers Ajmer",
  "description": "Bespoke 22K fine gold jewellery, BIS 916 hallmarked gold, royal bridal polki suites, designer gold kadas, wholesale and retail showroom in Ajmer.",
  "url": "https://lsgemsjewellers.com",
  "logo": "https://lsgemsjewellers.com/images/logo-transparent.png",
  "image": "https://lsgemsjewellers.com/images/logo.jpg",
  "telephone": "+91-98879-96201",
  "priceRange": "₹₹₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer, UPI",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Opp. Nagar Nigam, Hotel Ajmer Inn, Churi Bazar",
    "addressLocality": "Ajmer",
    "addressRegion": "Rajasthan",
    "postalCode": "305001",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "11:00",
      "closes": "20:00"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jewelryStoreSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-stone-900 antialiased selection:bg-amber-100 selection:text-amber-900" suppressHydrationWarning>
        <WishlistProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <ProductModal />
          <WishlistDrawer />
          <FloatingContact />
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}
