import ProfileContent from "@/components/ProfileContent";
import ProfileFooter from "@/components/ProfileFooter";
import ProfileHeader from "@/components/ProfileHeader";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <ProfileHeader />
      <ProfileContent />
      <ProfileFooter page={page} onPaginate={handlePaginate} />
    </div>
  );
  function handlePaginate(page: number) {
    setPage(page);
  }
}
