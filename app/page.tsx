import BreakingNews from "@/components/BreakingNews/BreakingNews";
import LatestNews from "@/components/LatestNews/LatestNews";
import HeroNews from "@/components/HeroNews/HeroNews";
import Newsletter from "@/components/Newsletter/Newsletter";
import Advertisement from "@/components/Advertisement/Advertisement";
import CategorySection from "@/components/CategorySection/CategorySection";
import TrendingNews from "@/components/TrendingNews/TrendingNews";

export default function HomePage() {
  return (
    <main>
     
      <HeroNews/>
      <BreakingNews />
      <Advertisement/>
      <LatestNews/>
      <CategorySection/>
      <TrendingNews/>
        <Newsletter/>
    </main>
  );
}