// TASK - React 1 week 1
// Create the "Our Partners section"
// Use the descriptions provided in /app/about_us/README.md
// Some inspiration ideas found in /data/inspiration_about_us

import styles from "./OurPartners.module.css";

const partners = [
  { name: "Amazon", logo: "/business_partners/amazon-logo.png" },
  { name: "Alphabet", logo: "/business_partners/alphabet-logo.png" },
  { name: "NYU", logo: "/business_partners/nyu-logo.png" },
  { name: "CBC", logo: "/business_partners/CBC_Logo_White.png" },
  {
    name: "Queen's University",
    logo: "/business_partners/QueensLogo_white.png",
  },
  { name: "Samsung", logo: "/business_partners/samsung-logo.png" },
];

export default function OurPartners() {
  return (
    <section className={styles.partnersSection}>
      <h4 className={styles.partnersLabel}>OUR PARTNERS</h4>
      <h2 className={styles.partnersTitle}>
        We collaborate with <br />
        progressive, ambitious <br />
        brands we believe in.
      </h2>
      <div className={styles.partnersGrid}>
        {partners.map((partner) => (
          <div className={styles.partnerCell} key={partner.name}>
            <img
              src={partner.logo}
              alt={partner.name}
              className={styles.partnerLogo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
