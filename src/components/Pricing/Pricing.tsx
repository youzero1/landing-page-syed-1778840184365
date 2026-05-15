import { Check } from 'lucide-react';
import { pricingPlans } from '@/lib/data';
import styles from './Pricing.module.css';
import clsx from 'clsx';
import { useState } from 'react';

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>No hidden fees. Scale up or down at any time.</p>

          <div className={styles.toggle}>
            <span className={clsx(styles.toggleLabel, !annual && styles.toggleActive)}>Monthly</span>
            <button
              className={clsx(styles.toggleBtn, annual && styles.toggleBtnOn)}
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle annual billing"
            >
              <span className={clsx(styles.toggleThumb, annual && styles.toggleThumbOn)} />
            </button>
            <span className={clsx(styles.toggleLabel, annual && styles.toggleActive)}>
              Annual
              <span className={styles.saveBadge}>Save 20%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={clsx(styles.card, plan.highlighted && styles.cardHighlighted)}
            >
              {plan.highlighted && (
                <div className={styles.popularBadge}>Most popular</div>
              )}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.priceRow}>
                <span className={styles.currency}>$</span>
                <span className={styles.price}>
                  {plan.price === 0 ? '0' : annual ? Math.round(plan.price * 0.8) : plan.price}
                </span>
                <span className={styles.period}>/{plan.period}</span>
              </div>
              <p className={styles.planDesc}>{plan.description}</p>

              <a
                href="#"
                className={clsx(styles.planCta, plan.highlighted && styles.planCtaHighlighted)}
              >
                {plan.cta}
              </a>

              <ul className={styles.featureList}>
                {plan.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.checkIcon}><Check size={14} strokeWidth={3} /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
