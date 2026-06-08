import type { CSSProperties } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { IoShareSocialSharp } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
export default function CardFooter() {
  return (
    <div style={footerStyle}>
      <div>
        <span>Read More</span>
        <FiChevronsRight />
      </div>
      <div>
        <IoShareSocialSharp />
        <CiSaveDown2 />
      </div>
    </div>
  );
}

const footerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};
