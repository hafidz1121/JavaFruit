'use client';
import Image from 'next/image';
import coldroomPackingImg from '../public/assets/coldroom-packing.jpg';
import { useLanguage } from '../context/LanguageContext';

export default function Technology() {
  const { t } = useLanguage();

  const steps = [
    { n: '01', title: t.technology.step1Title, text: t.technology.step1Text },
    { n: '02', title: t.technology.step2Title, text: t.technology.step2Text },
    { n: '03', title: t.technology.step3Title, text: t.technology.step3Text },
    { n: '04', title: t.technology.step4Title, text: t.technology.step4Text },
  ];

  return (
    <section className="tech" id="technology">
      <div className="wrap">
        <p className="eyebrow">{t.technology.eyebrow}</p>
        <h2>{t.technology.h2}</h2>
        <p className="tech-sub">{t.technology.sub}</p>

        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num"><span className="dot" />{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="tech-panel">
          <div className="copy">
            <h3>{t.technology.panelTitle}</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              {t.technology.panelSub}
            </p>
            <ul>
              <li>{t.technology.li1}</li>
              <li>{t.technology.li2}</li>
              <li>{t.technology.li3}</li>
            </ul>
          </div>
          <div className="photo">
            <Image
              src={coldroomPackingImg}
              alt={t.technology.altText}
              width={1280}
              height={960}
              loading="lazy"
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
