export type SiteBranding = {
  logo_image_url: string;
  title_line_one: string;
  title_line_two: string;
  show_search: boolean;
  search_url: string;
};

export type UtilityNavLink = {
  id: number;
  label: string;
  url: string;
  sort_order: number;
};

export type MainNavItem = {
  id: number;
  label: string;
  url: string;
  has_dropdown: boolean;
  sort_order: number;
};

export type HeroSlide = {
  id: number;
  headline: string;
  cta_label: string;
  cta_url: string;
  media_type: "image" | "video";
  media_url: string;
  sort_order: number;
};

export type StatBlock = {
  id: number;
  value: string;
  description: string;
  color_variant: "primary" | "secondary";
  sort_order: number;
};

export type FactsStatsSection = {
  title: string;
  stats: StatBlock[];
};

export type HomepageData = {
  branding: SiteBranding;
  utility_links: UtilityNavLink[];
  main_nav: MainNavItem[];
  hero_slides: HeroSlide[];
  facts_stats: FactsStatsSection | null;
};

export type LoginResponse = {
  access: string;
  refresh: string;
  username: string;
};
