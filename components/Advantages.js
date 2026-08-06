'use client';
import Image from 'next/image';
import mealTrayImg from '../public/assets/mas-kirana-meal-tray.jpg';
import { useLanguage } from '../context/LanguageContext';

export default function Advantages() {
  const { t } = useLanguage();

  const items = [
    {
      title: t.advantages.item1Title,
      text: t.advantages.item1Text,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
    {
      title: t.advantages.item2Title,
      text: t.advantages.item2Text,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: t.advantages.item3Title,
      text: t.advantages.item3Text,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12" />
          <path d="M12 12C12 7 16 3 21 3c0 5-4 9-9 9Z" />
          <path d="M12 12C12 7 8 3 3 3c0 5 4 9 9 9Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="advantages" id="advantages">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.advantages.eyebrow}</p>
          <h2>{t.advantages.h2}</h2>
        </div>
        <div className="cards3">
          {items.map((item) => (
            <div className="card" key={item.title}>
              <div className="icon-badge">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="advantages-meal-card">
          <div className="advantages-meal-img">
            <Image
              src={mealTrayImg}
              alt={t.advantages.mealAlt}
              width={1080}
              height={1440}
              loading="lazy"
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="advantages-meal-info">
            <p className="eyebrow" style={{ marginBottom: '8px' }}>{t.advantages.mealEyebrow}</p>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--green-deep)', marginBottom: '12px' }}>{t.advantages.mealTitle}</h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: '0.96rem', margin: 0 }}>
              {t.advantages.mealText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
