import styles from "./InterestSelection.module.css";

const interests = ["People", "Places", "Food", "Animals", "Cars", "Plants"];

export default function InterestSelection() {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Interest</p>
      <div className={styles.checkboxGrid}>
        {interests.map((interest) => (
          <label className={styles.checkboxGroup} key={interest}>
            <input type="checkbox" name="interests" value={interest} />
            <span>{interest}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
