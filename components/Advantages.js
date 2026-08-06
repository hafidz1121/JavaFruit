const items = [
  {
    title: 'Premium Quality',
    text: 'We implement the best agricultural practices and modern technology to maintain product consistency and quality across every harvest.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 6 17 3 21 3c0 4-2 9-9 9Zm0 0C12 6 7 3 3 3c0 4 2 9 9 9Z" />
      </svg>
    ),
  },
  {
    title: 'Health & Hygiene',
    text: 'Every banana is harvested, processed, and packaged hygienically to maintain cleanliness and health standards — free from harmful pesticides.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Taste & Texture',
    text: 'Naturally sweet taste and soft texture — ideal for direct consumption or as an ingredient in food and beverage recipes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13a8 8 0 0 0 16 0M4 13a8 8 0 0 1 16 0M4 13V6a8 8 0 0 1 16 0v7" />
      </svg>
    ),
  },
];

export default function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Advantages</p>
          <h2>What sets Java Fruit bananas apart</h2>
        </div>
        <div className="cards3">
          {items.map((item) => (
            <div className="card" key={item.title}>
              <div className="icon-badge">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
