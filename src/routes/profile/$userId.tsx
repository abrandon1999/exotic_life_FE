import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import type { CSSProperties } from "react";
//import { FaRegUserCircle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FiMessageSquare } from "react-icons/fi";
import profileLoader from "@/lib/profileLoader";
import { FaRegEdit } from "react-icons/fa";
import { BACKEND_BASE_URL } from "@/utils/variables";
import ProfileImage from "@/components/ProfileImage";

export const Route = createFileRoute("/profile/$userId")({
  loader: profileLoader,
  component: RouteComponent,
});

function RouteComponent() {
  const profile = Route.useLoaderData();
  const profileImageUrl = profile.image
    ? `${BACKEND_BASE_URL}${profile.image.path}`
    : null;
  const interests = profile.interests ?? [];

  return (
    <div>
      <h2>My Profile</h2>

      <div style={profileContainer}>
        <div style={nameContainer}>
          <HiUsers size={ICON_SIZE} />
          {profile.userId === profile.userRequest ? (
            <Link
              to="/profile/edit/$userId"
              params={{ userId: profile.userId }}
            >
              <FaRegEdit size={ICON_SIZE} />
            </Link>
          ) : (
            <FiMessageSquare size={ICON_SIZE} />
          )}
        </div>
        <ProfileImage
          profileImageUrl={profileImageUrl}
          firstName={profile.firstName}
          lastName={profile.lastName}
        />
        <div style={nameContainer}>
          <p style={nameStyle}>{profile.firstName ?? "First Name"}</p>
          <p style={nameStyle}>{profile.lastName ?? "Last Name"}</p>
        </div>
        <div style={dividerStyle}></div>
        <p style={sectionLabelStyle}>Interest</p>
        <ul style={interestListStyle}>
          {interests.map((interest, index) => (
            <li key={index} style={interestItemStyle}>
              {interest}
            </li>
          ))}
        </ul>
        <div style={dividerStyle}></div>
        <div style={nameContainer}>
          <FaYoutube size={ICON_SIZE} />
          <CiInstagram size={ICON_SIZE} />
          <RiTwitterXLine size={ICON_SIZE} />
          <FaTiktok size={ICON_SIZE} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

//const ICON_PLACEHOLDER = "200";
const ICON_SIZE = "30";
const MARGINBOTTOM = "25px";

const dividerStyle: CSSProperties = {
  height: "2px",
  border: "3px solid white",
  borderRadius: "2px",
  marginBottom: MARGINBOTTOM,
  marginTop: MARGINBOTTOM,
};
const nameStyle: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
};
const sectionLabelStyle: CSSProperties = {
  color: "rgba(156, 163, 175, 1)",
  fontSize: "0.875rem",
  fontWeight: 600,
  lineHeight: "1.25rem",
  marginBottom: "0.5rem",
};
const interestListStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "0.5rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
};
const interestItemStyle: CSSProperties = {
  minHeight: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgba(167, 139, 250, 1)",
  borderRadius: "8px",
  backgroundColor: "rgba(31, 41, 55, 1)",
  color: "rgba(243, 244, 246, 1)",
  fontSize: "0.875rem",
  fontWeight: 600,
  lineHeight: "1.25rem",
  textAlign: "center",
};
const profileContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  borderRadius: "10px",
  border: "5px solid white",
  margin: "0 auto",
  padding: "10px",
};
// const profileImageContainer: CSSProperties = {
//   display: "flex",
//   justifyContent: "center",
//   marginBottom: MARGINBOTTOM,
// };
// const profileImageStyle: CSSProperties = {
//   width: "200px",
//   height: "200px",
//   objectFit: "cover",
//   borderRadius: "50%",
//   border: "3px solid rgba(167, 139, 250, 1)",
// };
const nameContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: MARGINBOTTOM,
};
