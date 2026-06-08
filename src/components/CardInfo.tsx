import type { CSSProperties } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { colors } from "@/utils/colors";
export default function CardInfo() {
  return (
    <div style={infoContainer}>
      <p style={titleStyle}>Day at the Beach</p>
      <p style={descriptionStyle}>
        This is me and my friend having a great time on vacation...
      </p>
      <div style={buttonContainer}>
        <p style={buttonText}>Read More</p>
        <FiChevronsRight />
      </div>
    </div>
  );
}
const infoContainer: CSSProperties = {
  marginBottom: "20px",
};
const titleStyle: CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: 600,
  marginBottom: "10px",
  color: colors.textMain,
};
const descriptionStyle: CSSProperties = {
  color: colors.textSecondary,
};
const buttonContainer: CSSProperties = {
  width: "120px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.primaryAccent,
  borderRadius: "5px",
  cursor: "pointer",
};
const buttonText: CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 600,
  color: colors.textMain,
};
