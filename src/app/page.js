import Hero from "../components/Hero";

export const metadata = {
  title: "L.S Gems & Jewellers | 40 Years of Heritage & 22K BIS Hallmarked Gold",
  description: "Explore handcrafted 22K BIS 916 hallmarked bridal gold, royal Rani Haars, Polki chokers, designer gold kadas, and traditional Rajasthani Meenakari gold from L.S Gems & Jewellers, Ajmer. 40 years of heritage since 1986.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
    </main>
  );
}
