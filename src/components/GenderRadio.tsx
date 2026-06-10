import { useState } from "react";
import styles from "./GenderRadio.module.css";

const genderOptions = ["Male", "Female", "Divided"];

export default function GenderRadio() {
  const [selectedGender, setSelectedGender] = useState(genderOptions[0]);
  console.log(selectedGender);
  return (
    <div className={styles.mydict}>
      <div>
        {genderOptions.map((gender) => (
          <label key={gender}>
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={selectedGender === gender}
              onChange={() => setSelectedGender(gender)}
            />
            <span>{gender}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
