'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t.benefits.card1Title,
      sub: t.benefits.card1Sub,
      tag: t.benefits.card1Tag,
      accent: 'emerald',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 18 2c1 2 2 4.1 2 7a9 9 0 0 1-9 11z" />
          <path d="M9 21c0-6 3-10 8-12" />
        </svg>
      ),
    },
    {
      title: t.benefits.card2Title,
      sub: t.benefits.card2Sub,
      tag: t.benefits.card2Tag,
      accent: 'gold',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 0 18M12 7a5 5 0 0 0 0 10" />
        </svg>
      ),
    },
    {
      title: t.benefits.card3Title,
      sub: t.benefits.card3Sub,
      tag: t.benefits.card3Tag,
      accent: 'cyan',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
          <path d="M12 2v2M12 14v4" />
        </svg>
      ),
    },
    {
      title: t.benefits.card4Title,
      sub: t.benefits.card4Sub,
      tag: t.benefits.card4Tag,
      accent: 'green',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="benefits" id="benefits">
      <div className="wrap">
        <div className="benefits-head">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>{t.benefits.eyebrow}</p>
          <h2>{t.benefits.h2}</h2>
          <p>{t.benefits.sub}</p>
        </div>

        {/* Bento Cards Grid */}
        <div className="bento-grid">
          {cards.map((card, i) => (
            <div className={`bento-card bento-${card.accent}`} key={i}>
              <div className="bento-top">
                <div className="bento-icon">{card.icon}</div>
                <span className="bento-tag">{card.tag}</span>
              </div>
              <div className="bento-content">
                <h3>{card.title}</h3>
                <p>{card.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ethylene vs Carbide Comparison Panel */}
        <div className="compare-section">
          <h3 className="compare-title">{t.benefits.compareTitle}</h3>
          <div className="compare-grid">
            <div className="compare-card compare-positive">
              <div className="compare-card-header">
                <span className="compare-badge compare-badge-green">✔ Java Fruit</span>
                <h4>{t.benefits.compareEtilenTitle}</h4>
              </div>
              <ul className="compare-list">
                {t.benefits.compareEtilenItems.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="compare-card compare-negative">
              <div className="compare-card-header">
                <span className="compare-badge compare-badge-red">✕ Tradisional</span>
                <h4>{t.benefits.compareKarbitTitle}</h4>
              </div>
              <ul className="compare-list">
                {t.benefits.compareKarbitItems.map((item, idx) => (
                  <li key={idx}>
                    <span className="cross-icon">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

