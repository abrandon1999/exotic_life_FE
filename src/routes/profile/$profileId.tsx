import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FiMessageSquare } from "react-icons/fi";
import { BACKEND_BASE_URL } from "@/utils/variables";

type ProfileImage = {
  id: string;
  userId: string;
  filename: string;
  path: string;
  mimetype: string;
  size: number;
  isProfile: boolean;
};

type Profile = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  color: string | null;
  interests: string[] | null;
  userId: string;
  imageId: string | null;
  image: ProfileImage | null;
};

export const Route = createFileRoute("/profile/$profileId")({
  loader: async ({ params }) => {
    const response = await fetch(`${BACKEND_BASE_URL}/api/profile/${params.profileId}`);
    if (!response.ok) {
      throw new Error(`Profile request failed: ${response.status}`);
    }

    const data = await response.json();
    assertProfile(data);
    return data;
  },
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
          <FiMessageSquare size={ICON_SIZE} />
        </div>
        <div style={profileImageContainer}>
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt={`${profile.firstName ?? "User"} ${profile.lastName ?? "profile"}`}
              style={profileImageStyle}
            />
          ) : (
            <FaRegUserCircle size={ICON_PLACEHOLDER} />
          )}
        </div>
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
    </div>
  );
}

function assertProfile(value: unknown): asserts value is Profile {
  if (!isObject(value)) throw new Error("Invalid profile response");
  if (typeof value.id !== "string") throw new Error("Invalid profile id");
  if (typeof value.userId !== "string") throw new Error("Invalid profile userId");
  if (!isNullableString(value.firstName)) throw new Error("Invalid firstName");
  if (!isNullableString(value.lastName)) throw new Error("Invalid lastName");
  if (!isNullableString(value.gender)) throw new Error("Invalid gender");
  if (!isNullableString(value.color)) throw new Error("Invalid color");
  if (!isNullableString(value.imageId)) throw new Error("Invalid imageId");
  if (
    value.interests !== null &&
    (!Array.isArray(value.interests) ||
      !value.interests.every((interest) => typeof interest === "string"))
  ) {
    throw new Error("Invalid interests");
  }

  if (value.image !== null) assertProfileImage(value.image);
}

function assertProfileImage(value: unknown): asserts value is ProfileImage {
  if (!isObject(value)) throw new Error("Invalid profile image");
  if (typeof value.id !== "string") throw new Error("Invalid image id");
  if (typeof value.userId !== "string") throw new Error("Invalid image userId");
  if (typeof value.filename !== "string") throw new Error("Invalid filename");
  if (typeof value.path !== "string") throw new Error("Invalid image path");
  if (typeof value.mimetype !== "string") throw new Error("Invalid mimetype");
  if (typeof value.size !== "number") throw new Error("Invalid image size");
  if (typeof value.isProfile !== "boolean") {
    throw new Error("Invalid image profile flag");
  }
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isNullableString(value: unknown): value is string | null {
  return typeof value === "string" || value === null;
}

const ICON_PLACEHOLDER = "200";
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
const profileImageContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginBottom: MARGINBOTTOM,
};
const profileImageStyle: CSSProperties = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "50%",
  border: "3px solid rgba(167, 139, 250, 1)",
};
const nameContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: MARGINBOTTOM,
};
