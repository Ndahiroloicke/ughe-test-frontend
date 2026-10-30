import Image from "next/image";
import type { HomepageData } from "@/lib/types";
import styles from "./Header.module.css";

type Props = {
  data: Pick<HomepageData, "branding" | "utility_links" | "main_nav">;
};

export default function Header({ data }: Props) {
  const { branding, utility_links, main_nav } = data;

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoBlock}>
          <Image
            src={branding.logo_image_url}
            alt="UGHE logo"
            width={56}
            height={56}
            className={styles.logo}
            unoptimized
          />
          <div className={styles.titleBlock}>
            <span className={styles.titleLine}>{branding.title_line_one}</span>
            <span className={styles.titleLine}>{branding.title_line_two}</span>
          </div>
        </div>

        <div className={styles.utilityRow}>
          {utility_links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className={styles.utilityBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
          {branding.show_search && (
            <a
              href={branding.search_url}
              className={styles.searchBtn}
              aria-label="Search UGHE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.searchIcon} aria-hidden>
                ⌕
              </span>
            </a>
          )}
        </div>
      </div>

      <nav className={styles.mainNav} aria-label="Main navigation">
        {main_nav.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className={styles.navItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
            {item.has_dropdown && (
              <span className={styles.chevron} aria-hidden>
                ▾
              </span>
            )}
          </a>
        ))}
      </nav>
    </header>
  );
}
