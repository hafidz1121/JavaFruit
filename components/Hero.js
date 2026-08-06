'use client';
import Image from 'next/image';
import heroImg from '../public/assets/hero-bananas.jpg';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.h1_1}<em>{t.hero.h1_cavendish}</em>{t.hero.h1_2}
          </h1>
          <p className="hero-sub">
            {t.hero.sub}
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn gold">{t.hero.requestQuote}</a>
            <a href="#about" className="btn outline">{t.hero.learnStory}</a>
          </div>
          <div className="hero-stats">
            <div className="hstat"><b>{t.hero.stat1Num}</b><span>{t.hero.stat1Label}</span></div>
            <div className="hstat"><b>{t.hero.stat2Num}</b><span>{t.hero.stat2Label}</span></div>
            <div className="hstat"><b>{t.hero.stat3Num}</b><span>{t.hero.stat3Label}</span></div>
          </div>
        </div>
        <div className="hero-media">
          <div className="frame">
            <Image
              src={heroImg}
              alt="Fresh premium Cavendish bananas from Java Fruit packed in export boxes"
              width={800}
              height={523}
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
          <div className="swoosh-badge top-brand-seal">
            <span className="seal-star">★ ★ ★</span>
            <span className="seal-text">
              {t.hero.badge.split('\n').map((line, i) => (
                <span key={i} className="seal-line">
                  {line}
                  {i < t.hero.badge.split('\n').length - 1 && <br />}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
