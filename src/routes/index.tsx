import Card from "@/components/Card";
import { BACKEND_BASE_URL } from "@/utils/variables";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: async () => {
    const response = await fetch(`${BACKEND_BASE_URL}/api/post`, {
      credentials: "include",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Post request failed: ${response.status}`);
    }

    return response.json();
  },
  component: RouteComponent,
});

function RouteComponent() {
  const posts = Route.useLoaderData();
  console.log(posts);

  return (
    <div>
      <Card />
    </div>
  );
}
