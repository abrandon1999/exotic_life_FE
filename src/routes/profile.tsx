import ProfileContent from "@/components/ProfileContent";
import ProfileFooter from "@/components/ProfileFooter";
import ProfileHeader from "@/components/ProfileHeader";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ProfileHeader />
      <ProfileContent />
      <ProfileFooter />
    </div>
  );
}
