import type { CSSProperties } from "react";
import { FaHeart } from "react-icons/fa";
export default function CardHeader() {
  return (
    <div style={headerStyle}>
      <p>January 1 1971</p>
      <FaHeart />
    </div>
  );
}

const headerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
};
