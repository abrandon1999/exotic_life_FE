import type { CSSProperties } from "react";
import GenderRadio from "./GenderRadio";
export default function ProfileContent() {
  return (
    <div>
      <div id="first row">
        <div style={inputGroup}>
          <label htmlFor="" style={label}>
            First Name
          </label>
          <input type="text" style={input} />
        </div>
        <div style={inputGroup}>
          <label htmlFor="" style={label}>
            Last Name
          </label>
          <input type="text" style={input} />
        </div>

        <div style={inputGroup}>
          <label htmlFor="" style={label}>
            Email
          </label>
          <input type="email" name="" id="" style={input} />
        </div>
      </div>
      <div id="third row">
        <div style={inputGroup}>
          <label htmlFor="" style={label}>
            Gender
          </label>
          <GenderRadio />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="number" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Birthday</label>
          <p>Placeholder</p>
        </div>
      </div>
      <div id="forth row">
        <div>
          <div>
            <label htmlFor="">Phohe</label>
            <input type="tel" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Photo</label>
            <input type="file" name="" id="" />
          </div>
        </div>
        <div>Image</div>
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
const input: CSSProperties = {
  width: "100%",
  borderRadius: "0.375rem",
  border: "1px solid rgba(55,65,81,1)",
  outline: 0,
  backgroundColor: "rgba(17,24,39,1)",
  padding: "0.75rem 1rem",
  color: "rgba(243,244,246,1)",
};
