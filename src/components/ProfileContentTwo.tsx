import { type CSSProperties } from "react";

export default function ProfileContentTwo() {
  return (
    <div>
      <div>
        <label htmlFor=""></label>
        <div style={checkBoxGroup}>
          <input type="checkbox" name="" id="" />
          <span>Peope</span>
        </div>
      </div>
    </div>
  );
}
const checkBoxGroup: CSSProperties = {
  display: "flex",
};
