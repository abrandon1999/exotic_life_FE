import type { CSSProperties } from "react";
import ProfileButton from "./ProfileButton";
export default function ProfileContentThree() {
  return (
    <div>
      <h3>Thank You for creating your profile</h3>
      <div style={buttonContainerStyle}>
        <ProfileButton />
      </div>
    </div>
  );
}
const buttonContainerStyle: CSSProperties = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
