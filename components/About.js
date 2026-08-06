import Image from 'next/image';
import aboutImg from '../public/assets/about-governor.jpg';

export default function About() {
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
              alt="CV Intiplant Agro Lestari farmer partners with the Governor of East Java and Acting Regent of Lumajang"
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
            <div className="tag"><b>50+</b>Millennial farmer partners across Lumajang Regency</div>
          </div>
          <div>
            <p className="eyebrow">About Java Fruit</p>
            <h2>A flagship brand built on farmer partnership and modern standards.</h2>
            <p>
              Java Fruit is a brand engaged in the empowerment of Cavendish and Mas
              Kirana banana farming. We provide high-quality fresh bananas cultivated to
              modern farming standards, harvested from selected plantations, and
              hygienically packaged to maintain freshness until they reach consumers.
            </p>
            <p>
              Java Fruit bananas are cultivated by millennial farmers in Lumajang
              Regency, East Java Province, Indonesia, who collaborate as partners of CV
              Intiplant Agro Lestari — combining local knowledge with export-grade
              quality control.
            </p>
            <blockquote>
              &ldquo;Producing locally grown Cavendish and Mas Kirana bananas with global
              quality standards.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
