import type { CSSProperties } from "react";

export default function CardProfile() {
  return (
    <div style={profileContainer}>
      <div style={profilePicture}></div>
      <p>Your Name Here</p>
    </div>
  );
}

const profileContainer: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};
const profilePicture: CSSProperties = {
  width: "40px",
  height: "40px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  marginRight: "10px",
};
