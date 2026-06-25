import type { CSSProperties } from "react";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardFooter from "./CardFooter";
import { type Post } from "@/lib/postLoader";
import { colors } from "@/utils/colors";
import CardDivider from "./CardDivider";
interface Props {
  post: Post;
}
export default function Card({ post }: Props) {
  const images = post.images;
  return (
    <div style={container}>
      <CardHeader />
      <CardDivider />
      <CardImage images={images} />
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
