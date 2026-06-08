import type { CSSProperties } from "react";
import { colors } from "@/utils/colors";
export default function CardInfo() {
  return (
    <div style={infoContainer}>
      <p style={titleStyle}>Day at the Beach</p>
      <p style={descriptionStyle}>
        This is me and my friend having a great time on vacation
      </p>
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
