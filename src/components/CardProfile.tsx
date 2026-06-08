import type { CSSProperties } from "react";

export default function CardProfile() {
  return (
    <div style={profileContainer}>
      <div style={profilePicture}></div>
      <p>Your Name Here</p>
    </div>
  );
}
const PIC_SIZE = "60px";
const profileContainer: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: "20px",
};
const profilePicture: CSSProperties = {
  width: PIC_SIZE,
  height: PIC_SIZE,
  backgroundColor: "#fff",
  borderRadius: "50%",
  marginRight: "10px",
};
