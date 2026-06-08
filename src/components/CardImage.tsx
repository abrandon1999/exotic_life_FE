import type { CSSProperties } from "react";

export default function CardImage() {
  return (
    <div style={imageStyle}>
      <p style={{ color: "#000", fontSize: "3rem" }}>Image</p>
    </div>
  );
}

const imageStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  width: "100%",
  height: "300px",
  marginBottom: "20px",
  borderRadius: "5px",
};
