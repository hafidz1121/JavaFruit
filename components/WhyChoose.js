'use client';
import Image from 'next/image';
import farmerHarvesting from '../public/assets/farmer-harvesting.jpg';
import qualityCheckStaff from '../public/assets/quality-check-staff.jpg';
import coldroomPacking from '../public/assets/coldroom-packing.jpg';
import governorInspection from '../public/assets/governor-inspection.jpg';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChoose() {
  const { t } = useLanguage();

  const items = [
    {
      img: farmerHarvesting,
      alt: t.whyChoose.item1Title,
      title: t.whyChoose.item1Title,
      text: t.whyChoose.item1Text,
      w: 525, h: 700,
    },
    {
      img: qualityCheckStaff,
      alt: t.whyChoose.item2Title,
      title: t.whyChoose.item2Title,
      text: t.whyChoose.item2Text,
      w: 360, h: 480,
    },
    {
      img: coldroomPacking,
      alt: t.whyChoose.item3Title,
      title: t.whyChoose.item3Title,
      text: t.whyChoose.item3Text,
      w: 765, h: 510,
    },
    {
      img: governorInspection,
      alt: t.whyChoose.item4Title,
      title: t.whyChoose.item4Title,
      text: t.whyChoose.item4Text,
      w: 1200, h: 800,
    },
  ];

  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t.whyChoose.eyebrow}</p>
          <h2>{t.whyChoose.h2}</h2>
        </div>
        <div className="why-grid">
          {items.map((item) => (
            <div className="why-item" key={item.title}>
              <Image
                src={item.img}
                alt={item.alt}
                width={item.w}
                height={item.h}
                loading="lazy"
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ width: '170px', height: '150px', objectFit: 'cover' }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
