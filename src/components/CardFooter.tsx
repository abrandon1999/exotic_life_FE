import type { CSSProperties } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { IoShareSocialSharp } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
import { colors } from "@/utils/colors";
import { IconContext } from "react-icons";
export default function CardFooter() {
  return (
    <div style={footerStyle}>
      <div style={buttonContainer}>
        <p style={buttonText}>Read More</p>
        <FiChevronsRight />
      </div>
      <div style={iconContainer}>
        <IconContext.Provider value={{ size: ICON_SIZE }}>
          <IoShareSocialSharp />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: ICON_SIZE }}>
          <CiSaveDown2 />
        </IconContext.Provider>
      </div>
    </div>
  );
}
const ICON_SIZE = "30";
const footerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "end",
};
const buttonContainer: CSSProperties = {
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.primaryAccent,
  padding: "20px",
  borderRadius: "5px",
  cursor: "pointer",
};
const buttonText: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 600,
  color: colors.textMain,
};
const iconContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "200px",
};
