import Image from 'next/image';
import crateBananas from '../public/assets/crate-bananas.jpg';
import packingWoman from '../public/assets/packing-woman.jpg';
import greenBunch from '../public/assets/green-bunch-closeup.jpg';

export default function Stats() {
  return (
    <section className="stats" id="plantation">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">By the Numbers</p>
          <h2>Plantation area &amp; production capacity</h2>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">50<sup>ha</sup></div>
            <h4>Total Banana Plantation Area</h4>
            <p>
              Spread across various regions in Lumajang Regency, all plantations are
              managed systematically and sustainably to produce high-quality bananas
              with modern cultivation standards.
            </p>
          </div>
          <div className="stat-card">
            <div className="stat-num">7<sup>t / wk</sup></div>
            <h4>Total Banana Production</h4>
            <p>
              Through an organized cultivation system and our partner farmer network,
              we maintain product quality, supply continuity, and consistently meet
              market demand.
            </p>
          </div>
        </div>
        <div className="strip">
          <Image src={crateBananas} alt="Crate of freshly harvested premium bananas" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
          <Image src={packingWoman} alt="Java Fruit staff hygienically packing bananas for distribution" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
          <Image src={greenBunch} alt="Close-up of a fresh green Mas Kirana banana bunch" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
