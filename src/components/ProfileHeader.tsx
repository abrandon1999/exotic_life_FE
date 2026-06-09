import type { CSSProperties } from "react";

export default function ProfileHeader() {
  return (
    <div style={container}>
      <div style={block}>
        <div style={round}></div>
        <p style={text}>Step 1</p>
        <div style={line}></div>
      </div>
      <div style={block}>
        <div style={round}></div>
        <p style={text}>Step 2</p>
        <div style={line}></div>
      </div>
      <div style={block}>
        <div style={round}></div>
        <p style={text}>Step 3</p>
      </div>
    </div>
  );
}
const SIZE = "40px";
const LENGTH = "80px";
const FONT_SIZE = "0.60rem";
const container: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};
const block: CSSProperties = {
  display: "flex",
  alignItems: "center",
};
const round: CSSProperties = {
  width: SIZE,
  height: SIZE,
  borderRadius: "50%",
  backgroundColor: "#fff",
  marginRight: "5px",
};
const line: CSSProperties = {
  width: LENGTH,
  height: "3px",
  borderStyle: "solid",
  borderColor: "#fff",
  marginLeft: "5px",
  marginRight: "5px",
};
const text: CSSProperties = {
  fontSize: FONT_SIZE,
  fontWeight: 600,
};
