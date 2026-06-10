import GenderRadio from "./GenderRadio";

import ProfileTextInput from "./ProfileTextInput";
import ProfileFileInput from "./ProfileFileInput";
import ProfilePicture from "./ProfilePicture";
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
      <ProfileTextInput label="First Name" onHandle={onHandleFirstName} />
      <ProfileTextInput label="Last Name" onHandle={onHandleLastName} />
      <ProfileTextInput label="Email" />
      <GenderRadio onHandleGender={onHandleGender} />
      <ProfileFileInput onHandleProfilePic={onHandleProfilePic} />
      <ProfilePicture imageUrl={imageUrl} />
    </div>
  );
}
