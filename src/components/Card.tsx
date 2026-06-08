import type { CSSProperties } from "react";
import { FaHeart } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import { IoShareSocialSharp } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
export default function Card() {
  return (
    <div style={container}>
      <div style={headerStyle}>
        <p>January 1 1971</p>
        <FaHeart />
      </div>
      <div style={imageStyle}>
        <p style={{ color: "#000", fontSize: "3rem" }}>Image</p>
      </div>
      <div style={infoContainer}>
        <p style={titleStyle}>Day at the Beach</p>
        <p>This is me and my friend having a great time on vacation</p>
      </div>
      <div style={profileContainer}>
        <div style={profilePicture}></div>
        <p>Your Name Here</p>
      </div>
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
    </div>
  );
}

const container: CSSProperties = {
  backgroundColor: "#1E293B",
  padding: "20px",
};
const headerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
};
const footerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};
const infoContainer: CSSProperties = {
  marginBottom: "20px",
};
const titleStyle: CSSProperties = {
  fontSize: "1.3rem",
  fontWeight: 600,
  marginBottom: "10px",
};
const profileContainer: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};
const profilePicture: CSSProperties = {
  width: "40px",
  height: "40px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  marginRight: "10px",
};
const imageStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  width: "100%",
  height: "300px",
  marginBottom: "20px",
};
