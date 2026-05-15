import { ArrowRight, Play } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Introducing AI Workflows — now in beta</span>
          <ArrowRight size={14} />
        </div>

        <h1 className={styles.headline}>
          The future of{' '}
          <span className={styles.gradient}>team productivity</span>{' '}
          is here
        </h1>

        <p className={styles.subheadline}>
          Lumio helps teams move faster, collaborate smarter, and ship products that matter.
          Join 50,000+ teams already transforming the way they work.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>
            Start for free
            <ArrowRight size={18} />
          </a>
          <button className={styles.secondaryBtn}>
            <span className={styles.playIcon}>
              <Play size={14} fill="currentColor" />
            </span>
            Watch demo
          </button>
        </div>

        <p className={styles.trust}>No credit card required &nbsp;·&nbsp; 14-day free trial &nbsp;·&nbsp; Cancel anytime</p>

        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardDots}>
              <span /><span /><span />
            </div>
            <span className={styles.cardTitle}>Q4 Product Roadmap</span>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.taskRow}>
              <span className={styles.taskDone}>✓</span>
              <span className={styles.taskTextDone}>Design system v2 overhaul</span>
              <span className={styles.tagBlue}>Done</span>
            </div>
            <div className={styles.taskRow}>
              <span className={styles.taskDone}>✓</span>
              <span className={styles.taskTextDone}>API rate limiting & caching</span>
              <span className={styles.tagBlue}>Done</span>
            </div>
            <div className={styles.taskRow}>
              <span className={styles.taskActive} />
              <span className={styles.taskText}>AI workflow automation</span>
              <span className={styles.tagPurple}>In progress</span>
            </div>
            <div className={styles.taskRow}>
              <span className={styles.taskPending} />
              <span className={styles.taskText}>Mobile app beta release</span>
              <span className={styles.tagGray}>Upcoming</span>
            </div>
            <div className={styles.taskRow}>
              <span className={styles.taskPending} />
              <span className={styles.taskText}>Enterprise SSO & SAML</span>
              <span className={styles.tagGray}>Upcoming</span>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.avatars}>
              {['#7c6af7','#06b6d4','#f97316','#22c55e'].map((c, i) => (
                <div key={i} className={styles.avatar} style={{ background: c }} />
              ))}
            </div>
            <span className={styles.cardFooterText}>4 team members active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
