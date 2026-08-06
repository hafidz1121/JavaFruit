'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();

  const badges = [
    t.benefits.badge1,
    t.benefits.badge2,
    t.benefits.badge3,
    t.benefits.badge4,
  ];

  return (
    <section className="benefits">
      <div className="wrap">
        <div className="benefits-head">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>{t.benefits.eyebrow}</p>
          <h2>{t.benefits.h2}</h2>
          <p>{t.benefits.sub}</p>
        </div>
        <div className="badge-ring">
          {badges.map((lines, i) => (
            <div className="badge" key={i}>
              <span>
                {lines.map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < lines.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
