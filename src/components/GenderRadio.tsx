import { useState } from "react";
import styles from "./GenderRadio.module.css";

const genderOptions = ["Male", "Female", "Divided"];
interface Props {
  onHandleGender: (gender: string) => void;
}
export default function GenderRadio({ onHandleGender }: Props) {
  const [selectedGender, setSelectedGender] = useState(genderOptions[0]);

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
              onChange={() => {
                onHandleGender(gender);
                setSelectedGender(gender);
              }}
            />
            <span>{gender}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
