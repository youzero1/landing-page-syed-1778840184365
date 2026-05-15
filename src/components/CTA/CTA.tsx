import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.glow} />
          <div className={styles.content}>
            <div className={styles.iconRow}>
              <Sparkles size={32} className={styles.sparkle} />
            </div>
            <h2 className={styles.title}>Ready to transform how your team works?</h2>
            <p className={styles.subtitle}>
              Join 50,000+ teams. Start your 14-day free trial — no credit card required.
            </p>
            <div className={styles.actions}>
              <a href="#pricing" className={styles.primaryBtn}>
                Get started for free
                <ArrowRight size={18} />
              </a>
              <a href="#" className={styles.secondaryBtn}>Talk to sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
