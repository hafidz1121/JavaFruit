'use client';
import Image from 'next/image';
import aboutImg from '../public/assets/farmer-group-governor.jpg';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <div className="curve-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0,40 C 320,110 1120,-30 1440,40 L1440,90 L0,90 Z" fill="#EAF1E4" />
        </svg>
      </div>
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-media">
            <Image
              src={aboutImg}
              alt={t.about.altText}
              width={1080}
              height={720}
              sizes="(max-width: 960px) 100vw, 45vw"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }}
            />
            <div className="tag">
              <b>{t.about.tagNum}</b>
              {t.about.tagText}
            </div>
          </div>
          <div>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.h2}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <blockquote style={{ whiteSpace: 'pre-line' }}>
              {t.about.quote}
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
