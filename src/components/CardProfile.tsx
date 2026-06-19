import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
//FIXME:
const temp = "3b054c16-0e8d-4193-86a6-a6d0f3d2c28d";
export default function CardProfile() {
  return (
    <div style={profileContainer}>
      <div style={profilePicture}></div>
      <Link to="/profile/$userId" params={{ userId: temp }}>
        Your Name Here
      </Link>
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
