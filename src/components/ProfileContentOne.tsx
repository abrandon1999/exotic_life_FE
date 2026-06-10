import type { CSSProperties } from "react";
import GenderRadio from "./GenderRadio";
import { FaRegUserCircle } from "react-icons/fa";
interface Props {
  onHandleFirstName: (firstName: string) => void;
  onHandleLastName: (lastName: string) => void;
  onHandleGender: (gender: string) => void;
  onHandleProfilePic: (file: File) => void;
  imageUrl: string;
}
export default function ProfileContent({
  onHandleFirstName,
  onHandleLastName,
  onHandleGender,
  onHandleProfilePic,
  imageUrl,
}: Props) {
  return (
    <div>
      <div style={inputGroup}>
        <label htmlFor="first" style={label}>
          First Name
        </label>
        <input
          type="text"
          style={input}
          onChange={(e) => onHandleFirstName(e.target.value)}
        />
      </div>
      <div style={inputGroup}>
        <label htmlFor="" style={label}>
          Last Name
        </label>
        <input
          type="text"
          style={input}
          onChange={(e) => onHandleLastName(e.target.value)}
        />
      </div>

      <div style={inputGroup}>
        <label htmlFor="" style={label}>
          Email
        </label>
        <input type="email" name="" id="" style={input} disabled />
      </div>

      <div style={inputGroup}>
        <label htmlFor="" style={label}>
          Gender
        </label>
        <GenderRadio onHandleGender={onHandleGender} />
      </div>

      <div>
        <div style={inputGroup}>
          <label htmlFor="" style={label}>
            Photo
          </label>
          <input
            type="file"
            name=""
            id=""
            style={input}
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                onHandleProfilePic(file);
              }
            }}
          />
        </div>
      </div>
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
    </div>
  );
}
const ICON_SIZE = "200";
const imageContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};
const inputGroup: CSSProperties = {
  marginTop: "0.25rem",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  marginBottom: "1.5rem",
};
const label: CSSProperties = {
  display: "block",
  color: "rgba(156,163,175,1)",
  marginBottom: "4px",
};
const input: CSSProperties = {
  width: "100%",
  borderRadius: "0.375rem",
  border: "1px solid rgba(55,65,81,1)",
  outline: 0,
  backgroundColor: "rgba(17,24,39,1)",
  padding: "0.75rem 1rem",
  color: "rgba(243,244,246,1)",
};
