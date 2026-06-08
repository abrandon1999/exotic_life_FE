import type { CSSProperties } from "react";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardFooter from "./CardFooter";

import { colors } from "@/utils/colors";
import CardDivider from "./CardDivider";
export default function Card() {
  return (
    <div style={container}>
      <CardHeader />
      <CardDivider />
      <CardImage />
      <CardInfo />
      <CardDivider />
      <CardFooter />
    </div>
  );
}

const container: CSSProperties = {
  backgroundColor: colors.primary,
  padding: "20px",
};
