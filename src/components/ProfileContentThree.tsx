import type { CSSProperties } from "react";
import ProfileButton from "./ProfileButton";
interface Props {
  onHandleSubmit: () => void;
}
export default function ProfileContentThree({ onHandleSubmit }: Props) {
  return (
    <div>
      <h3>Thank You for creating your profile</h3>
      <div style={buttonContainerStyle}>
        <ProfileButton onHandleSubmit={onHandleSubmit} />
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
