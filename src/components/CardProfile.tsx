import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { BACKEND_BASE_URL } from "@/utils/variables";
interface Props {
  userId: string;
  name: string;
  image: string | null;
}
export default function CardProfile({ userId, name, image }: Props) {
  return (
    <div style={profileContainer}>
      {image ? (
        <img
          src={`${BACKEND_BASE_URL}${image}`}
          alt=""
          style={profilePicture}
        />
      ) : (
        <div style={profilePicture}></div>
      )}

      <Link
        to="/profile/$userId"
        params={{ userId }}
        style={{ color: "white" }}
      >
        {name}
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
