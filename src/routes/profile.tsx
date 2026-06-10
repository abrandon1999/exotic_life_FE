//import ProfileContentOne from "@/components/ProfileContentOne";
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
  return (
    <div style={container}>
      <ProfileHeader page={page} />
      <ProfileContentTwo />
      <ProfileFooter page={page} onPaginate={handlePaginate} />
    </div>
  );
  function handlePaginate(page: number) {
    setPage(page);
  }
}

const container: CSSProperties = {
  padding: "1rem",
  minHeight: "100vh",
  paddingBottom: "6rem",
};
