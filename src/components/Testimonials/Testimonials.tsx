import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import styles from './Testimonials.module.css';
import type { Testimonial } from '@/types';

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" className={styles.star} />
        ))}
      </div>
      <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
      <div className={styles.author}>
        <div className={styles.avatar}>{t.avatar}</div>
        <div>
          <div className={styles.name}>{t.name}</div>
          <div className={styles.role}>{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h2 className={styles.title}>Loved by teams everywhere</h2>
          <p className={styles.subtitle}>
            Don&apos;t take our word for it — hear from the teams that ship with Lumio every day.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
