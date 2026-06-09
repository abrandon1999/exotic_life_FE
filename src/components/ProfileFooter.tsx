import type { CSSProperties } from "react";

export default function ProfileFooter() {
  return (
    <div style={container}>
      <button style={buttonStyle}>Prev</button>
      <button style={buttonStyle}>Next</button>
    </div>
  );
}
const container: CSSProperties = {
  marginTop: "2rem",
  display: "flex",
  justifyContent: "space-evenly",
};

const buttonStyle: CSSProperties = {
  width: "75px",
};
