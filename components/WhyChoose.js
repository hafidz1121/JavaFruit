import Image from 'next/image';
import harvestTree from '../public/assets/harvest-tree.jpg';
import eventBananas from '../public/assets/event-bananas.jpg';
import stackedBunches from '../public/assets/stacked-bunches.jpg';
import coldStorageCircle from '../public/assets/cold-storage-circle.jpg';

const items = [
  {
    img: harvestTree,
    alt: 'Fresh Cavendish banana bunch being harvested from a plantation in Lumajang, East Java',
    title: 'Fresh Bananas from Premium Selected Plantations',
    text: "Every banana is carefully selected from the finest plantations in Indonesia, especially from local farmers in Lumajang, East Java, ensuring consistent freshness and premium quality all the way to consumers.",
  },
  {
    img: eventBananas,
    alt: 'Java Fruit partner farmers holding harvested banana bunches at a community event',
    title: 'Supporting Sustainable Local Agriculture',
    text: "Java Fruit is committed to supporting local Indonesian farmers through sustainable agricultural practices that promote environmental responsibility and farmers' welfare.",
  },
  {
    img: stackedBunches,
    alt: 'Wrapped and stacked banana bunches ready for hygienic distribution',
    title: 'Hygienic Harvest & Distribution Standards',
    text: 'All harvesting, handling, and distribution processes comply with national food safety standards and National Food Agency regulations — free from harmful pesticide residues.',
  },
  {
    img: coldStorageCircle,
    alt: 'Governor of East Java visiting a Java Fruit banana plantation in Lumajang',
    title: 'Quality Guaranteed from Farm to Table',
    text: 'We ensure quality is maintained throughout every stage of the chain — from plantation and packaging to delivering products to local consumers and global trading partners.',
  },
];

export default function WhyChoose() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Why Choose Java Fruit</p>
          <h2>Selected plantations, sustainable farming, verified standards</h2>
        </div>
        <div className="why-grid">
          {items.map((item) => (
            <div className="why-item" key={item.title}>
              <Image src={item.img} alt={item.alt} style={{ width: '170px', height: '150px', objectFit: 'cover' }} />
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
