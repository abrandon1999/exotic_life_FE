import { useState } from "react";
import styles from "./InterestSelection.module.css";

const interests = ["People", "Places", "Food", "Animals", "Cars", "Plants"];

interface Props {
  onSelectedInterests: (interests: string[]) => void;
}
export default function InterestSelection({ onSelectedInterests }: Props) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  function handleInterestChange(interest: string) {
    setSelectedInterests((currentInterests) =>
      currentInterests.includes(interest)
        ? currentInterests.filter(
            (currentInterest) => currentInterest !== interest,
          )
        : [...currentInterests, interest],
    );

    onSelectedInterests(
      selectedInterests.includes(interest)
        ? selectedInterests.filter(
            (currentInterest) => currentInterest !== interest,
          )
        : [...selectedInterests, interest],
    );
    console.log("function");
  }

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
                handleInterestChange(interest);
                onSelectedInterests([...selectedInterests]);
              }}
            />
            <span>{interest}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
