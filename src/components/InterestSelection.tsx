import styles from "./InterestSelection.module.css";

const interests = ["People", "Places", "Food", "Animals", "Cars", "Plants"];

interface Props {
  selectedInterests: string[];
  onInterestChange?: (interest: string) => void;
}
export default function InterestSelection({
  selectedInterests,
  onInterestChange,
}: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Interest</p>
      <div className={styles.checkboxGrid}>
        {interests.map((interest) => (
          <label className={styles.checkboxGroup} key={interest}>
            <input
              type="checkbox"
              name="interests"
              value={interest}
              checked={selectedInterests.includes(interest)}
              onChange={() => {
                onInterestChange?.(interest);
              }}
            />
            <span>{interest}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
