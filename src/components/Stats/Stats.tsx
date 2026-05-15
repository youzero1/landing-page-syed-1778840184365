import { stats } from '@/lib/data';
import styles from './Stats.module.css';

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.stat}>
            <div className={styles.value}>
              {stat.value}
              {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
            </div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
