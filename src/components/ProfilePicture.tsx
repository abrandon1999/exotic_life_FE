import { FaRegUserCircle } from "react-icons/fa";
import type { CSSProperties } from "react";
interface Props {
  imageUrl: string;
}
export default function ProfilePicture({ imageUrl }: Props) {
  return (
    <div style={imageContainer}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="User Profile Picture"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ) : (
        <FaRegUserCircle size={ICON_SIZE} />
      )}
    </div>
  );
}

const ICON_SIZE = "200";
const imageContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};
