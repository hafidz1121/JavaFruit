import Image from 'next/image';
import heroImg from '../public/assets/hero-bananas.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Lumajang, East Java · Indonesia</p>
          <h1>
            Premium <em>Cavendish</em> &amp; Mas Kirana bananas, grown by the next
            generation of Indonesian farmers.
          </h1>
          <p className="hero-sub">
            Java Fruit is the flagship brand of CV Intiplant Agro Lestari — cultivated to
            global quality standards, ripened without carbide, and hygienically packaged
            from farm to table.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn gold">Request a Quote</a>
            <a href="#about" className="btn outline">Learn Our Story ↓</a>
          </div>
          <div className="hero-stats">
            <div className="hstat"><b>50 ha</b><span>Plantation Area</span></div>
            <div className="hstat"><b>7 t/wk</b><span>Production Capacity</span></div>
            <div className="hstat"><b>0%</b><span>Carbide Used</span></div>
          </div>
        </div>
        <div className="hero-media">
          <div className="frame">
            <Image
              src={heroImg}
              alt="Fresh premium Cavendish bananas from Java Fruit packed in export boxes"
              priority
              style={{ width: '100%', height: '460px', objectFit: 'cover' }}
            />
          </div>
          <div className="swoosh-badge">Millennial<br />Farmer<br />Grown</div>
        </div>
      </div>
    </section>
  );
}
