import Image from 'next/image';
import warehouseImg from '../public/assets/warehouse.jpg';

const steps = [
  { n: '01', title: 'No Carbide Used', text: 'Our bananas are never ripened with carbide chemicals.' },
  { n: '02', title: 'Cold Storage', text: 'Controlled temperature, humidity, and air circulation.' },
  { n: '03', title: 'Ethylene Gas Based', text: 'A natural ripening hormone produced by fruit itself.' },
  { n: '04', title: 'Modern Technology', text: 'Controlled post-harvest systems preserve fruit quality.' },
];

export default function Technology() {
  return (
    <section className="tech" id="technology">
      <div className="wrap">
        <p className="eyebrow">Post-Harvest Technology</p>
        <h2>Banana ripening with technology — not carbide.</h2>
        <p className="tech-sub">
          We use modern ripening technology with ethylene gas in controlled cold storage,
          keeping every bunch naturally ripened, evenly coloured, and sweeter — safe for
          consumption from farm to table.
        </p>

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
            <h3>We Use Ethylene Gas</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              Ethylene is a natural hormone produced by fruits during the ripening
              process. With this technology, our bananas:
            </p>
            <ul>
              <li>Ripen more evenly</li>
              <li>Develop a natural yellow colour</li>
              <li>Taste noticeably sweeter</li>
            </ul>
          </div>
          <div className="photo">
            <Image
              src={warehouseImg}
              alt="Java Fruit banana boxes prepared in cold storage warehouse for distribution"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '320px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
