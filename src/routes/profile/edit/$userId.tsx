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
//import ProfilePicture from "@/components/ProfilePicture";
import InterestSelection from "@/components/InterestSelection";
import ColorSelection from "@/components/ColorSelection";
import { BACKEND_BASE_URL } from "@/utils/variables";
import profileLoader from "@/lib/profileLoader";
import ProfileImage from "@/components/ProfileImage";
export const Route = createFileRoute("/profile/edit/$userId")({
  loader: profileLoader,
  component: RouteComponent,
});

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: File | null;
  interests: string[];
  color: string;
};
function RouteComponent() {
  const profile = Route.useLoaderData();
  const profileImageUrl = profile.image
    ? `${BACKEND_BASE_URL}${profile.image.path}`
    : null;
  //const interests = profile.interests ?? [];
  const [page, setPage] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: profile.firstName || "",
    lastName: profile.lastName || "",
    email: "",
    gender: profile.gender || "",
    image: null,
    interests: profile.interests || [],
    color: profile.color || "",
  });

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
          <ProfileImage
            profileImageUrl={profileImageUrl}
            firstName={profile.firstName}
            lastName={profile.lastName}
            imageFile={userInfo.image}
          />
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
      {page === 3 ? (
        <ProfileContentThree onHandleSubmit={handleProfileSubmit} />
      ) : null}
      <ProfileFooter page={page} onPaginate={handlePaginate} />
    </div>
  );
  async function handleProfileSubmit() {
    const formData = new FormData();

    formData.append("firstName", userInfo.firstName);
    formData.append("lastName", userInfo.lastName);
    formData.append("gender", userInfo.gender);
    formData.append("color", userInfo.color);
    formData.append("interests", JSON.stringify(userInfo.interests));
    if (userInfo.image) formData.append("image", userInfo.image);

    const response = await fetch(`${BACKEND_BASE_URL}/api/profile`, {
      method: "PUT",
      body: formData,
      credentials: "include",
    });
    if (!response.ok) {
      console.log("response not ok");
      throw new Error(`Response status: ${response.status}`);
    }
    //TODO: Successful Response
    console.log("Successful Response");
  }
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
    //FIXME: Don't convert FILE to DataUrl
    setUserInfo({ ...userInfo, image: file });
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
