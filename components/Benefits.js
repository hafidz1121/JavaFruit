const badges = [
  ['Naturally', 'Ripened', 'Bananas'],
  ['Sweeter', 'Taste'],
  ['Quality', 'Maintained'],
  ['Safe for', 'Consumption'],
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="wrap">
        <div className="benefits-head">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Benefits of Technology</p>
          <h2>Modern, controlled post-harvest handling to protect fruit quality</h2>
          <p>&ldquo;We use modern and controlled post-harvest technology to maintain fruit quality.&rdquo;</p>
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
