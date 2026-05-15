import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';
import styles from './FAQ.module.css';
import clsx from 'clsx';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <p className={styles.subtitle}>Can&apos;t find what you&apos;re looking for? <a href="#" className={styles.contactLink}>Contact us</a>.</p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={clsx(styles.item, openIndex === i && styles.itemOpen)}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.question}</span>
                <ChevronDown size={18} className={clsx(styles.chevron, openIndex === i && styles.chevronOpen)} />
              </button>
              {openIndex === i && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
