import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
//FIXME:
const temp = "6257f72d-1d4a-42fb-b000-fd5f07eda275";
export default function CardProfile() {
  return (
    <div style={profileContainer}>
      <div style={profilePicture}></div>
      <Link to="/profile/$profileId" params={{ profileId: temp }}>
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
