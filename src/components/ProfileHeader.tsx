import type { CSSProperties } from "react";

export default function ProfileHeader() {
  return (
    <div>
      <div style={container}>
        <div style={round}></div>
        <p style={text}>Step 1</p>
        <div style={line}></div>
      </div>
    </div>
  );
}
const SIZE = "60px";
const container: CSSProperties = {
  display: "flex",
  alignItems: "center",
};
const round: CSSProperties = {
  width: SIZE,
  height: SIZE,
  borderRadius: "50%",
  backgroundColor: "#fff",
  marginRight: "10px",
};
const line: CSSProperties = {
  width: "100px",
  height: "3px",
  borderStyle: "solid",
  borderColor: "#fff",
  marginLeft: "5px",
  marginRight: "5px",
};
const text: CSSProperties = {
  fontSize: "1.2rem",
};
