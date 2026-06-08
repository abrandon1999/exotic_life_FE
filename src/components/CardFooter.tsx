import type { CSSProperties } from "react";
import CardProfile from "./CardProfile";
import CardIcon from "./CardIcon";
export default function CardFooter() {
  return (
    <div style={footerStyle}>
      <CardProfile />
      <CardIcon />
    </div>
  );
}

const footerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};
