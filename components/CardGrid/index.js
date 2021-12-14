import Link from "next/link";

import styles from "./CardGrid.module.css";

export default function CardGrid({ cards }) {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <Link key={card.href} href={card.href}>
          <a className={styles.card}>{card.content}</a>
        </Link>
      ))}
    </div>
  );
}
