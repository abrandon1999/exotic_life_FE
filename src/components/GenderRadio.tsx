import { useState } from "react";
import styles from "./GenderRadio.module.css";
import type { CSSProperties } from "react";
const genderOptions = ["Male", "Female", "Divided"];
interface Props {
  onHandleGender: (gender: string) => void;
}
export default function GenderRadio({ onHandleGender }: Props) {
  const [selectedGender, setSelectedGender] = useState(genderOptions[0]);

  return (
    <div style={inputGroup}>
      <label htmlFor="" style={label}>
        Gender
      </label>
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
    </div>
  );
}

const inputGroup: CSSProperties = {
  marginTop: "0.25rem",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  marginBottom: "1.5rem",
};
const label: CSSProperties = {
  display: "block",
  color: "rgba(156,163,175,1)",
  marginBottom: "4px",
};
