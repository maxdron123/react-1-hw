import styles from "../page.module.css";
export default function RoverPhoto({ src, date, roverName }) {
  return (
    <div>
      <img className={styles.nasaPicOfTheDayImg} src={src} alt={roverName} />
      <div>
        <strong>Name: {roverName}</strong>
        <div>Date: {date}</div>
      </div>
    </div>
  );
}
