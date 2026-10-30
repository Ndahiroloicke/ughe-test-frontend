import FactsStats from "@/components/FactsStats";
import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import AuthBanner from "@/components/AuthBanner";
import { fetchHomepage } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const data = await fetchHomepage();

  return (
    <div className="page-shell">
      <AuthBanner />
      <Header
        data={{
          branding: data.branding,
          utility_links: data.utility_links,
          main_nav: data.main_nav,
        }}
      />
      <HeroSlideshow slides={data.hero_slides} />
      {data.facts_stats && <FactsStats section={data.facts_stats} />}
    </div>
  );
}
