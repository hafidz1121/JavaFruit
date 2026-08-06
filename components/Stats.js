'use client';
import Image from 'next/image';
import bananaPlantation from '../public/assets/banana-plantation.jpg';
import qualityStaff from '../public/assets/quality-staff.jpg';
import distributionOfficial from '../public/assets/distribution-official.jpg';
import groundbreakingGroup from '../public/assets/groundbreaking-group.jpg';
import { useLanguage } from '../context/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="stats" id="plantation">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.stats.eyebrow}</p>
          <h2>{t.stats.h2}</h2>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">50<sup>ha</sup></div>
            <h4>{t.stats.card1Title}</h4>
            <p>{t.stats.card1Text}</p>
          </div>
          <div className="stat-card">
            <div className="stat-num">7<sup>t / wk</sup></div>
            <h4>{t.stats.card2Title}</h4>
            <p>{t.stats.card2Text}</p>
          </div>
        </div>
        <div className="strip">
          <Image src={bananaPlantation} alt={t.stats.alt1} width={1920} height={1080} loading="lazy" sizes="(max-width: 960px) 50vw, 25vw" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
          <Image src={qualityStaff} alt={t.stats.alt2} width={765} height={1020} loading="lazy" sizes="(max-width: 960px) 50vw, 25vw" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
          <Image src={distributionOfficial} alt={t.stats.alt3} width={960} height={1280} loading="lazy" sizes="(max-width: 960px) 50vw, 25vw" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
          <Image src={groundbreakingGroup} alt={t.stats.alt4} width={1280} height={853} loading="lazy" sizes="(max-width: 960px) 50vw, 25vw" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
