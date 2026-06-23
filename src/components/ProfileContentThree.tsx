import type { CSSProperties } from "react";
import Button from "./Button";
interface Props {
  onHandleSubmit: () => void;
}
export default function ProfileContentThree({ onHandleSubmit }: Props) {
  return (
    <div>
      <h3>Thank You for creating your profile</h3>
      <div style={buttonContainerStyle}>
        <Button label="Done" onHandleSubmit={onHandleSubmit} />
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
