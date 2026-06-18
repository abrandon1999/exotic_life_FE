import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { FaRegUserCircle } from "react-icons/fa";
export const Route = createFileRoute("/profile/")({
  component: RouteComponent,
});
const interests = ["People", "Places", "Food", "Animals", "Cars", "Plants"];
function RouteComponent() {
  return (
    <div>
      <h2>My Profile</h2>

      <div style={profileContainer}>
        <div style={profileImageContainer}>
          <FaRegUserCircle size={ICON_SIZE} />
        </div>
        <div style={nameContainer}>
          <p style={nameStyle}>First Name</p>
          <p style={nameStyle}>Last Name</p>
        </div>
        <p style={emailStyle}>abrandon1999@yahoo.com</p>
        <div style={dividerStyle}></div>
        <p>Interest</p>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const ICON_SIZE = "200";
const MARGINBOTTOM = "10px";
const dividerStyle: CSSProperties = {
  height: "2px",
  border: "3px solid dodgerblue",
  borderRadius: "2px",
  marginBottom: MARGINBOTTOM,
};
const nameStyle: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
};
const emailStyle: CSSProperties = {
  textAlign: "center",
  marginBottom: MARGINBOTTOM,
};
const profileContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  borderRadius: "10px",
  border: "5px solid dodgerblue",
  margin: "0 auto",
  padding: "10px",
};
const profileImageContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginBottom: MARGINBOTTOM,
};
const nameContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: MARGINBOTTOM,
};
