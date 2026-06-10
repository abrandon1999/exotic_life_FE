import ProfileContentOne from "@/components/ProfileContentOne";
import ProfileContentThree from "@/components/ProfileContentThree";
import ProfileContentTwo from "@/components/ProfileContentTwo";
import ProfileFooter from "@/components/ProfileFooter";
import ProfileHeader from "@/components/ProfileHeader";
import { createFileRoute } from "@tanstack/react-router";
import { type CSSProperties, useState } from "react";
import ProfileTextInput from "@/components/ProfileTextInput";
import GenderRadio from "@/components/GenderRadio";
import ProfileFileInput from "@/components/ProfileFileInput";
import ProfilePicture from "@/components/ProfilePicture";
import InterestSelection from "@/components/InterestSelection";
import ColorSelection from "@/components/ColorSelection";
export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  imageUrl: string;
  interests: string[];
  color: string;
};
function RouteComponent() {
  const [page, setPage] = useState(2);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "abrandon1999@yahoo.com",
    gender: "Male",
    imageUrl: "",
    interests: [],
    color: "#A78BFA",
  });
  console.log(userInfo.color);
  return (
    <div style={container}>
      <ProfileHeader page={page} />
      {page === 1 ? (
        <ProfileContentOne>
          <ProfileTextInput
            label="First Name"
            onHandle={handleFirstName}
            value={userInfo.firstName}
          />
          <ProfileTextInput
            label="Last Name"
            onHandle={handleLastName}
            value={userInfo.lastName}
          />
          <ProfileTextInput label="Email" value={userInfo.email} />
          <GenderRadio onHandleGender={handleGender} value={userInfo.gender} />
          <ProfileFileInput onHandleProfilePic={handleProfilePic} />
          <ProfilePicture imageUrl={userInfo.imageUrl} />
        </ProfileContentOne>
      ) : null}
      {page === 2 ? (
        <ProfileContentTwo>
          <InterestSelection
            onInterestChange={handleInterestChange}
            selectedInterests={userInfo.interests}
          />
          <ColorSelection
            value={userInfo.color}
            onColorChange={handleColorChange}
          />
        </ProfileContentTwo>
      ) : null}
      {page === 3 ? <ProfileContentThree /> : null}
      <ProfileFooter page={page} onPaginate={handlePaginate} />
    </div>
  );
  function handlePaginate(page: number) {
    setPage(page);
  }
  function handleFirstName(firstName: string) {
    setUserInfo({ ...userInfo, firstName });
  }
  function handleLastName(lastName: string) {
    setUserInfo({ ...userInfo, lastName });
  }

  function handleGender(gender: string) {
    setUserInfo({ ...userInfo, gender });
  }
  function handleProfilePic(file: File) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      const imageUrl = fileReader.result as string;
      setUserInfo({ ...userInfo, imageUrl });
    };
  }
  function handleInterestChange(interest: string) {
    const isIncluded = userInfo.interests.includes(interest);
    const filterList = userInfo.interests.filter((item) => item !== interest);
    const addedList = [...userInfo.interests, interest];
    const interests = isIncluded ? filterList : addedList;
    setUserInfo({ ...userInfo, interests });
  }
  function handleColorChange(color: string) {
    setUserInfo({ ...userInfo, color });
  }
}

const container: CSSProperties = {
  padding: "1rem",
  minHeight: "100vh",
  paddingBottom: "6rem",
};
