//import ProfileContentOne from "@/components/ProfileContentOne";
//import ProfileContentThree from "@/components/ProfileContentThree";
//import ProfileContentTwo from "@/components/ProfileContentTwo";
import ProfileFooter from "@/components/ProfileFooter";
import ProfileHeader from "@/components/ProfileHeader";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { type CSSProperties, useEffect, useState } from "react";
//import ProfileTextInput from "@/components/ProfileTextInput";
//import GenderRadio from "@/components/GenderRadio";
import ProfileFileInput from "@/components/ProfileFileInput";
//import ProfilePicture from "@/components/ProfilePicture";
import InterestSelection from "@/components/InterestSelection";
import ColorSelection from "@/components/ColorSelection";
import { BACKEND_BASE_URL } from "@/utils/variables";
import profileLoader from "@/lib/profileLoader";
import ProfileImage from "@/components/ProfileImage";
import styles from "../../../components/GenderRadio.module.css";
import Button from "@/components/Button";
export const Route = createFileRoute("/profile/edit/$userId")({
  loader: profileLoader,
  shouldReload: true,
  component: RouteComponent,
});

const genderOptions = ["Male", "Female", "Divided"];
function RouteComponent() {
  const navigate = useNavigate();
  const profile = Route.useLoaderData();
  const profileImageUrl = profile.image
    ? `${BACKEND_BASE_URL}${profile.image.path}`
    : null;

  const [page, setPage] = useState(1);
  const [userInfo, setUserInfo] = useState({
    firstName: profile.firstName ?? "",
    lastName: profile.lastName ?? "",
    gender: profile.gender ?? "",
    interests: profile.interests ?? [],
    color: profile.color ?? "#A78BFA",
    image: null as File | null,
  });

  useEffect(() => {
    setUserInfo({
      firstName: profile.firstName ?? "",
      lastName: profile.lastName ?? "",
      gender: profile.gender ?? "",
      interests: profile.interests ?? [],
      color: profile.color ?? "#A78BFA",
      image: null,
    });
  }, [profile]);

  //FIXME: console.log(userInfo);
  return (
    <div style={container}>
      <ProfileHeader page={page} />
      <form action={handleSubmit}>
        <div id="page1" style={{ display: `${page === 1 ? "block" : "none"}` }}>
          <div style={inputGroup}>
            <label htmlFor="first" style={labelStyle}>
              {"First Name"}
            </label>
            <input
              type="text"
              name="firstName"
              style={inputStyle}
              value={userInfo.firstName}
              onChange={(event) => {
                setUserInfo({ ...userInfo, firstName: event.target.value });
              }}
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="first" style={labelStyle}>
              {"Last Name"}
            </label>
            <input
              type="text"
              style={inputStyle}
              name="lastName"
              value={userInfo.lastName}
              onChange={(event) => {
                setUserInfo({ ...userInfo, lastName: event.target.value });
              }}
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="first" style={labelStyle}>
              {"Email"}
            </label>
            <input
              type="text"
              style={inputStyle}
              value={"tempmail@yahoo.com"}
              disabled
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="" style={labelStyle}>
              Gender
            </label>
            <div className={styles.mydict}>
              <div>
                {genderOptions.map((gender) => (
                  <label key={gender}>
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={userInfo.gender === gender}
                      onChange={() => {
                        setUserInfo({ ...userInfo, gender });
                      }}
                    />
                    <span>{gender}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <ProfileFileInput onHandleProfilePic={handleProfilePic} />
          <ProfileImage
            profileImageUrl={profileImageUrl}
            firstName={profile.firstName}
            lastName={profile.lastName}
            imageFile={userInfo.image}
          />
        </div>
        <div id="page2" style={{ display: `${page === 2 ? "block" : "none"}` }}>
          <InterestSelection
            selectedInterests={userInfo.interests}
            onInterestChange={handleInterestChange}
          />
          <ColorSelection
            value={userInfo.color}
            onColorChange={handleColorChange}
          />
        </div>
        <div id="page3" style={{ display: `${page === 3 ? "block" : "none"}` }}>
          <div style={buttonContainerStyle}>
            <Button label="Finish" />
          </div>
        </div>
      </form>
      <ProfileFooter page={page} onPaginate={handlePaginate} />
    </div>
  );
  async function handleSubmit(formData: FormData) {
    formData.set("interests", JSON.stringify(userInfo.interests));
    formData.set("color", userInfo.color);
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
    await navigate({ to: "/" });

    console.log({
      ...Object.fromEntries(formData),
      interests: userInfo.interests,
    });
  }
  function handlePaginate(page: number) {
    setPage(page);
  }
  function handleProfilePic(file: File) {
    //FIXME: Don't convert FILE to DataUrl
    setUserInfo({ ...userInfo, image: file });
  }
  function handleInterestChange(interest: string) {
    const isIncluded = userInfo.interests.includes(interest);
    const interests = isIncluded
      ? userInfo.interests.filter((item) => item !== interest)
      : [...userInfo.interests, interest];

    setUserInfo({ ...userInfo, interests });
  }
  function handleColorChange(color: string) {
    setUserInfo({ ...userInfo, color });
  }
}

//-------Page Styling--------------------------------------///
const container: CSSProperties = {
  padding: "1rem",
  minHeight: "100vh",
  paddingBottom: "6rem",
};
const inputGroup: CSSProperties = {
  marginTop: "0.25rem",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  marginBottom: "1.5rem",
};
const labelStyle: CSSProperties = {
  display: "block",
  color: "rgba(156,163,175,1)",
  marginBottom: "4px",
};

const inputStyle: CSSProperties = {
  width: "100%",
  borderRadius: "0.375rem",
  border: "1px solid rgba(55,65,81,1)",
  outline: 0,
  backgroundColor: "rgba(17,24,39,1)",
  padding: "0.75rem 1rem",
  color: "rgba(243,244,246,1)",
};
const buttonContainerStyle: CSSProperties = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
