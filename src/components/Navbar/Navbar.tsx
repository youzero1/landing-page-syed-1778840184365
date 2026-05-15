import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { navItems } from '@/lib/data';
import styles from './Navbar.module.css';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Zap size={18} strokeWidth={2.5} />
          </div>
          <span className={styles.logoText}>Lumio</span>
        </a>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#" className={styles.signIn}>Sign in</a>
          <a href="#pricing" className={styles.ctaBtn}>Get started</a>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className={styles.mobileDivider} />
          <a href="#" className={styles.mobileSignIn}>Sign in</a>
          <a href="#pricing" className={styles.mobileCtaBtn} onClick={() => setMenuOpen(false)}>Get started</a>
        </div>
      )}
    </header>
  );
}
