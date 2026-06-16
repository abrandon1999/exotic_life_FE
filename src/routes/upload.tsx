import { createFileRoute } from "@tanstack/react-router";
import { BACKEND_BASE_URL } from "@/utils/variables";
export const Route = createFileRoute("/upload")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <form action={handleUpload}>
        <input type="file" name="profile" id="profile" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
  function handleUpload(formData: FormData) {
    fetch(`${BACKEND_BASE_URL}/api/upload`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
  }
}
