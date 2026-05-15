import styles from './Logos.module.css';

const logos = [
  'Vercel', 'Stripe', 'Notion', 'Linear', 'Figma', 'GitHub', 'Slack', 'Atlassian',
];

export default function Logos() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Trusted by teams at world-class companies</p>
      <div className={styles.track}>
        <div className={styles.logos}>
          {[...logos, ...logos].map((name, i) => (
            <div key={i} className={styles.logoItem}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
