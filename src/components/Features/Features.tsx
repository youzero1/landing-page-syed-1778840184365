import { Zap, Users, BarChart3, Shield, Puzzle, Globe } from 'lucide-react';
import { features } from '@/lib/data';
import styles from './Features.module.css';
import type { Feature } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={24} />,
  Users: <Users size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Shield: <Shield size={24} />,
  Puzzle: <Puzzle size={24} />,
  Globe: <Globe size={24} />,
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        {iconMap[feature.icon]}
      </div>
      {feature.tag && (
        <span className={styles.tag}>{feature.tag}</span>
      )}
      <h3 className={styles.cardTitle}>{feature.title}</h3>
      <p className={styles.cardDesc}>{feature.description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Features</span>
          <h2 className={styles.title}>Everything your team needs</h2>
          <p className={styles.subtitle}>
            Built for modern teams who demand speed, clarity, and results. Every feature designed with purpose.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
