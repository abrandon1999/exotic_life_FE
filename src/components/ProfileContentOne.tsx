import type { CSSProperties } from "react";
import GenderRadio from "./GenderRadio";
import { FaRegUserCircle } from "react-icons/fa";
export default function ProfileContent() {
  return (
    <div>
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

      <div style={inputGroup}>
        <label htmlFor="" style={label}>
          Gender
        </label>
        <GenderRadio />
      </div>

      <div>
        <div style={inputGroup}>
          <label htmlFor="" style={label}>
            Photo
          </label>
          <input type="file" name="" id="" style={input} />
        </div>
      </div>
      <div style={imageContainer}>
        <FaRegUserCircle size={ICON_SIZE} />
      </div>
    </div>
  );
}
const ICON_SIZE = "200";
const imageContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};
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
