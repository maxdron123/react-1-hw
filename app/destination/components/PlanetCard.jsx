/* TASK - React 1 week 2 */
/* Add all 4 planets! Europa, Moon, Mars, Titan  */
/* Use the README.md file for descriptions */
/* Create a <PlanetCard /> component, which accepts the following properties: */
/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */
import styles from "@/components/destination/destination.module.css";

export default function PlanetCard({
  name,
  description,
  thumbnail,
  isSelected,
  onAddOrRemovePlanet,
}) {
  return (
    <div className="planetCard">
      <img className="planetThumbnail" src={thumbnail} alt={name} />
      <div className="planetDescription">
        <h2>
          {name.toUpperCase()} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className={styles.roundButton}
        onClick={() => onAddOrRemovePlanet(name)}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
}
