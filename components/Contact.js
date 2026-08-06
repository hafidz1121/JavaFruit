'use client';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function LazyMap({ mapTitle }) {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="map-frame" ref={ref}>
      {load ? (
        <iframe
          title={mapTitle}
          loading="lazy"
          src="https://www.google.com/maps?q=Rojopolo,+Jatiroto,+Lumajang+Regency,+East+Java&output=embed"
        />
      ) : (
        <div style={{ width: '100%', height: '380px', background: '#e8ede4' }} />
      )}
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow" style={{ color: 'var(--gold-soft)' }}>{t.contact.eyebrow}</p>
          <h2>{t.contact.h2}</h2>
          <p className="lede">{t.contact.lede}</p>
          <div className="contact-list">
            <a href="tel:+628570603286" className="row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              +62 857 0603 286
            </a>
            <a href="mailto:javafruitindonesia@gmail.com" className="row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <path d="m4 4 8 8 8-8" />
                </svg>
              </span>
              javafruitindonesia@gmail.com
            </a>
            <div className="row address-row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span className="address-text">
                <span>{t.contact.addressLine1}</span>
                <span>{t.contact.addressLine2}</span>
              </span>
            </div>
          </div>
          <div className="social-row">
            <a href="https://www.instagram.com/javafruitindonesia" aria-label="Java Fruit on Instagram" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" /></svg>
            </a>
            <a href="https://www.tiktok.com/@javafruitindonesia" aria-label="Java Fruit on TikTok" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.46" /><path d="M14 3c.5 2.5 2.3 4.2 5 4.5" /></svg>
            </a>
          </div>
        </div>
        <LazyMap mapTitle={t.contact.mapTitle} />
      </div>
    </section>
  );
}
