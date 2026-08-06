'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logoCV from '../public/assets/logo-cv.png';
import logoJavaFruit from '../public/assets/logo-javafruit.png';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t, lang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const waMessage = lang === 'id' 
    ? 'Halo Java Fruit, saya ingin bertanya mengenai pasokan pisang.'
    : 'Hello Java Fruit, I would like to inquire about banana supply.';
  const waUrl = `https://wa.me/628570603286?text=${encodeURIComponent(waMessage)}`;

  return (
    <header>
      <div className="nav">
        <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
          <div className="brand-logos" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image
              src={logoCV}
              alt="Logo CV Intiplant Agro Lestari"
              width={34}
              height={34}
              priority
              sizes="34px"
              style={{ width: '34px', height: '34px', objectFit: 'contain', borderRadius: '6px', flexShrink: 0 }}
            />
            <Image
              src={logoJavaFruit}
              alt="Logo Java Fruit"
              width={42}
              height={42}
              priority
              sizes="42px"
              style={{ width: '42px', height: '42px', objectFit: 'contain', flexShrink: 0 }}
            />
          </div>
          <div className="brand-text">
            <strong>Java Fruit</strong>
            <span>CV Intiplant Agro Lestari</span>
          </div>
        </a>

        <div className={`links-wrapper ${menuOpen ? 'active' : ''}`}>
          <nav className="links">
            <a href="#about" onClick={() => setMenuOpen(false)}>{t.header.about}</a>
            <a href="#advantages" onClick={() => setMenuOpen(false)}>{t.header.advantages}</a>
            <a href="#technology" onClick={() => setMenuOpen(false)}>{t.header.technology}</a>
            <a href="#why" onClick={() => setMenuOpen(false)}>{t.header.whyUs}</a>
            <a href="#plantation" onClick={() => setMenuOpen(false)}>{t.header.plantation}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{t.header.contact}</a>
          </nav>

          <div className="mobile-lang-wrapper">
            <LanguageToggle />
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn wa-btn mobile-wa-btn"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.479 1.33 4.989l-1.413 5.161 5.281-1.386c1.455.794 3.097 1.228 4.795 1.228h.004c5.517 0 9.993-4.476 9.993-9.993 0-2.67-1.04-5.18-2.929-7.068-1.888-1.889-4.398-2.924-7.068-2.924zm0 18.284c-1.5 0-2.973-.403-4.258-1.166l-.305-.181-3.167.831.845-3.088-.199-.316c-.84-1.336-1.285-2.887-1.285-4.471 0-4.474 3.64-8.114 8.117-8.114 2.167 0 4.204.844 5.736 2.377 1.532 1.532 2.376 3.569 2.376 5.737 0 4.475-3.64 8.114-8.117 8.114zm4.452-6.082c-.244-.122-1.444-.712-1.668-.794-.224-.081-.387-.122-.55.122-.163.245-.632.794-.774.957-.143.163-.285.184-.53.061-.244-.122-1.033-.381-1.968-1.214-.728-.648-1.22-1.449-1.363-1.694-.143-.245-.015-.377.107-.499.11-.11.244-.285.367-.428.122-.143.163-.245.244-.407.082-.163.041-.305-.02-.428-.061-.122-.55-1.325-.754-1.814-.199-.477-.402-.413-.55-.421-.143-.008-.305-.008-.468-.008s-.428.061-.652.305c-.224.245-.856.836-.856 2.039 0 1.203.876 2.364.998 2.527.122.163 1.724 2.632 4.177 3.691.583.252 1.038.403 1.393.516.586.186 1.12.16 1.542.097.471-.07 1.444-.591 1.648-1.162.204-.571.204-1.06.143-1.162-.061-.102-.224-.163-.468-.285z"/>
            </svg>
            <span>{t.header.contactUsBtn}</span>
          </a>
        </div>

        <div className="nav-actions">
          <div className="desktop-lang-wrapper">
            <LanguageToggle />
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn wa-btn desktop-wa-btn"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.479 1.33 4.989l-1.413 5.161 5.281-1.386c1.455.794 3.097 1.228 4.795 1.228h.004c5.517 0 9.993-4.476 9.993-9.993 0-2.67-1.04-5.18-2.929-7.068-1.888-1.889-4.398-2.924-7.068-2.924zm0 18.284c-1.5 0-2.973-.403-4.258-1.166l-.305-.181-3.167.831.845-3.088-.199-.316c-.84-1.336-1.285-2.887-1.285-4.471 0-4.474 3.64-8.114 8.117-8.114 2.167 0 4.204.844 5.736 2.377 1.532 1.532 2.376 3.569 2.376 5.737 0 4.475-3.64 8.114-8.117 8.114zm4.452-6.082c-.244-.122-1.444-.712-1.668-.794-.224-.081-.387-.122-.55.122-.163.245-.632.794-.774.957-.143.163-.285.184-.53.061-.244-.122-1.033-.381-1.968-1.214-.728-.648-1.22-1.449-1.363-1.694-.143-.245-.015-.377.107-.499.11-.11.244-.285.367-.428.122-.143.163-.245.244-.407.082-.163.041-.305-.02-.428-.061-.122-.55-1.325-.754-1.814-.199-.477-.402-.413-.55-.421-.143-.008-.305-.008-.468-.008s-.428.061-.652.305c-.224.245-.856.836-.856 2.039 0 1.203.876 2.364.998 2.527.122.163 1.724 2.632 4.177 3.691.583.252 1.038.403 1.393.516.586.186 1.12.16 1.542.097.471-.07 1.444-.591 1.648-1.162.204-.571.204-1.06.143-1.162-.061-.102-.224-.163-.468-.285z"/>
            </svg>
            <span>{t.header.contactUsBtn}</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="var(--green-deep)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
