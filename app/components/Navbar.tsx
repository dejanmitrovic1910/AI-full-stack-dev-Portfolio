'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const HIRE_ME_URL = 'https://www.freelancer.com/u/DeMit19';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why me', href: '#why' },
];

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 80);

      const sectionIds = ['home', 'about', 'services', 'portfolio', 'why'];
      const offset = 100;
      const scrollY = window.scrollY;
      const line = scrollY + offset;
      const scrollBottom = scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Activate the last section whose top is at or above the scan line (stable
      // while scrolling). getBoundingClientRect avoids offsetParent issues.
      let current = sectionIds[0];
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= line) current = id;
      }

      // Last section shorter than viewport: you can hit max scroll before the scan
      // line passes #why, so the loop would stay on "Portfolio".
      if (scrollBottom >= docHeight - 5) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar-custom${shrink ? ' shrink' : ''}`}>
        <div className="container" style={{ maxWidth: 1140, margin: '0 auto', padding: '0 15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="#home" onClick={(e) => scrollTo(e, '#home')}>
              {/* <Image
                src="/images/Aron.jpg"
                alt="Dejan Mitrovic"
                width={40}
                height={40}
                unoptimized
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              /> */}
            </a>

            {/* Desktop nav */}
            <ul style={{ display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}
                className="desktop-nav">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className={`nav-link-item${active === id ? ' active' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={HIRE_ME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hire-me-btn"
                >
                  Hire Me
                </a>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger-btn"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'none', flexDirection: 'column', gap: 5, padding: 8
              }}
              aria-label="Toggle menu"
            >
              <span style={{ width: 24, height: 2, background: '#333', display: 'block' }} />
              <span style={{ width: 24, height: 2, background: '#333', display: 'block' }} />
              <span style={{ width: 24, height: 2, background: '#333', display: 'block' }} />
            </button>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <ul style={{
              display: 'flex', flexDirection: 'column', gap: 4,
              listStyle: 'none', margin: '12px 0 8px', padding: 0
            }}>
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className={`nav-link-item${active === id ? ' active' : ''}`}
                      style={{ display: 'block' }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .desktop-nav { display: none !important; }
            .hamburger-btn { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Mobile sticky "Hire Me" button */}
      <a
        href={HIRE_ME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hire-me-sticky"
        aria-label="Hire Me"
      >
        Hire Me
      </a>
    </>
  );
}
