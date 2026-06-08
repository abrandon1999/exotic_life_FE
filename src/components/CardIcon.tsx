import type { CSSProperties } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
import { IconContext } from "react-icons";
export default function CardIcon() {
  return (
    <div style={iconContainer}>
      <IconContext.Provider value={{ size: ICON_SIZE }}>
        <IoShareSocialSharp />
      </IconContext.Provider>
      <IconContext.Provider value={{ size: ICON_SIZE }}>
        <CiSaveDown2 />
      </IconContext.Provider>
    </div>
  );
}

const ICON_SIZE = "30";
const iconContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "200px",
};
