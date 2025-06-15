// TASK - React 1 week 1
// Create the "Our Crew section"
// Use the descriptions provided in /app/about_us/README.md
// Use the pictures from /public/crew
// Some inspiration ideas found in /data/inspiration_about_us

import styles from "./OurCrew.module.css";

const crew = [
  {
    name: "Captain Sarah Vega",
    role: "Captain",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    image: "/crew/image-anousheh-ansari.png",
  },
  {
    name: "Dr. Leo Redding",
    role: "Chief Astrophysicist",
    description:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    image: "/crew/image-douglas-hurley.png",
  },
  {
    name: "Chief Engineer Mark Shuttleworth",
    role: "Chief Engineer",
    description:
      "With his extensive background in aerospace engineering, Mark is responsible for the state-of-the-art technology that powers our spacecraft. His innovation ensures that our travelers are always in safe hands.",
    image: "/crew/image-mark-shuttleworth.png",
  },
  {
    name: "Mission Specialist Alex Santos",
    role: "Mission Specialist",
    description:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    image: "/crew/image-victor-glover.png",
  },
];

export default function OurCrew() {
  return (
    <section className={styles.crewSection}>
      <h2 className={styles.crewTitle}>Our Crew</h2>
      <div className={styles.crewGrid}>
        {crew.map((member) => (
          <div className={styles.crewCard} key={member.name}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.crewImage}
            />
            <h3 className={styles.crewName}>{member.name}</h3>
            <div className={styles.crewRole}>{member.role}</div>
            <p className={styles.crewDesc}>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
