import { FaRegUserCircle } from "react-icons/fa";

interface Props {
  profileImageUrl: string | null;
  firstName: string | null;
  lastName: string | null;
  imageFile?: File | null;
}
export default function ProfileImage({
  profileImageUrl,
  firstName,
  lastName,
  imageFile,
}: Props) {
  const fileImageUrl = imageFile ? URL.createObjectURL(imageFile) : "";
  return (
    <div style={profileImageContainer}>
      {fileImageUrl ? (
        <img
          src={fileImageUrl}
          alt={"user profile image"}
          style={profileImageStyle}
        />
      ) : profileImageUrl ? (
        <img
          src={profileImageUrl}
          alt={`${firstName ?? "User"} ${lastName ?? "profile"}`}
          style={profileImageStyle}
        />
      ) : (
        <FaRegUserCircle size={ICON_PLACEHOLDER} />
      )}
    </div>
  );
}

const MARGINBOTTOM = "25px";
const ICON_PLACEHOLDER = "200";
const profileImageContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginBottom: MARGINBOTTOM,
};
const profileImageStyle: React.CSSProperties = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "50%",
  border: "3px solid rgba(167, 139, 250, 1)",
};
