import type { CSSProperties } from "react";

interface Props {
  onHandleProfilePic: (file: File) => void;
}
export default function ProfileFileInput({ onHandleProfilePic }: Props) {
  return (
    <div style={inputGroup}>
      <label htmlFor="" style={label}>
        Photo
      </label>
      <input
        type="file"
        name=""
        id=""
        style={input}
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onHandleProfilePic(file);
          }
        }}
      />
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
