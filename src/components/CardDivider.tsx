import type { CSSProperties } from "react";
import { colors } from "@/utils/colors";
export default function CardDivider() {
  return <div style={dividerStyle}></div>;
}
const MARGIN = "20px";
const dividerStyle: CSSProperties = {
  width: "100%",
  height: "5px",
  marginTop: MARGIN,
  marginBottom: MARGIN,
  backgroundColor: colors.textSecondary,
  borderRadius: "10px",
};
