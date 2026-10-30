import type { FactsStatsSection } from "@/lib/types";
import styles from "./FactsStats.module.css";

type Props = {
  section: FactsStatsSection;
};

export default function FactsStats({ section }: Props) {
  return (
    <section className={styles.section} aria-labelledby="facts-stats-title">
      <h2 id="facts-stats-title" className={styles.title}>
        {section.title}
      </h2>
      <div className={styles.grid}>
        {section.stats.map((stat) => (
          <article
            key={stat.id}
            className={`${styles.block} ${
              stat.color_variant === "secondary"
                ? styles.blockSecondary
                : styles.blockPrimary
            }`}
          >
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.description}>{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
