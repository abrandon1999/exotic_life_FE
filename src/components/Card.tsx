import type { CSSProperties } from "react";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardFooter from "./CardFooter";
import CardProfile from "./CardProfile";
export default function Card() {
  return (
    <div style={container}>
      <CardHeader />
      <CardImage />
      <CardInfo />
      <CardProfile />
      <CardFooter />
    </div>
  );
}

const container: CSSProperties = {
  backgroundColor: "#1E293B",
  padding: "20px",
};
