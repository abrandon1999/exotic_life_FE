import type { CSSProperties } from "react";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardFooter from "./CardFooter";
import { type Post } from "@/lib/postLoader";
import { colors } from "@/utils/colors";
import CardDivider from "./CardDivider";
import CardProfile from "./CardProfile";
import CardIcon from "./CardIcon";
interface Props {
  post: Post;
}
export default function Card({ post }: Props) {
  const images = post.images;
  const date = formatPostDate(post.createdAt);
  const title = post.title;
  const description = post.description;
  const userId = post.userId;
  const userName = post.user.name;
  const profileImage = post.user.profile.image.path;
  console.log(post);
  return (
    <div style={container}>
      <CardHeader date={date} />
      <CardDivider />
      <CardImage images={images} />
      <CardInfo title={title} description={description} />
      <CardDivider />
      <CardFooter>
        <CardProfile userId={userId} name={userName} image={profileImage} />
        <CardIcon />
      </CardFooter>
    </div>
  );
}

const container: CSSProperties = {
  backgroundColor: colors.primary,
  padding: "20px",
};

function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}
