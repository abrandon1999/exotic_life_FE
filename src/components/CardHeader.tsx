import type { CSSProperties } from "react";
import { FaHeart } from "react-icons/fa";
interface Props {
  date: string;
}
export default function CardHeader({ date }: Props) {
  return (
    <div style={headerStyle}>
      <p>{date}</p>
      <FaHeart />
    </div>
  );
}

const headerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
};
