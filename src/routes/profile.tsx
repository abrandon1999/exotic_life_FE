import ProfileContentOne from "@/components/ProfileContentOne";
import ProfileContentThree from "@/components/ProfileContentThree";
import ProfileContentTwo from "@/components/ProfileContentTwo";
import ProfileFooter from "@/components/ProfileFooter";
import ProfileHeader from "@/components/ProfileHeader";
import { createFileRoute } from "@tanstack/react-router";
import { type CSSProperties, useState } from "react";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const [page, setPage] = useState(1);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "Male",
    imageUrl: "",
    interest: [],
    color: "",
  });
  console.log(userInfo);
  return (
    <div style={container}>
      <ProfileHeader page={page} />
      {page === 1 ? (
        <ProfileContentOne
          onHandleFirstName={handleFirstName}
          onHandleLastName={handleLastName}
          onHandleGender={handleGender}
          onHandleProfilePic={handleProfilePic}
          imageUrl={userInfo.imageUrl}
        />
      ) : null}
      {page === 2 ? <ProfileContentTwo /> : null}
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
}

const container: CSSProperties = {
  padding: "1rem",
  minHeight: "100vh",
  paddingBottom: "6rem",
};
