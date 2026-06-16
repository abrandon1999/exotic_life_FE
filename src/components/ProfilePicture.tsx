import { FaRegUserCircle } from "react-icons/fa";
import type { CSSProperties } from "react";
interface Props {
  image: File | null;
}
export default function ProfilePicture({ image }: Props) {
  const imageUrl = image ? URL.createObjectURL(image) : "";
  return (
    <div style={imageContainer}>
      {image ? (
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
