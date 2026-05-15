import { Zap } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  Support: ['Documentation', 'Status', 'Community', 'Contact'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Zap size={16} strokeWidth={2.5} />
              </div>
              <span className={styles.logoText}>Lumio</span>
            </div>
            <p className={styles.tagline}>
              The future of team productivity. Move fast, collaborate smarter.
            </p>
          </div>

          <div className={styles.links}>
            {Object.entries(footerLinks).map(([category, items]) => (
              <div key={category} className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>{category}</h4>
                <ul className={styles.linkList}>
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className={styles.link}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Lumio, Inc. All rights reserved.
          </p>
          <p className={styles.madeWith}>Built with ❤️ for teams everywhere</p>
        </div>
      </div>
    </footer>
  );
}
