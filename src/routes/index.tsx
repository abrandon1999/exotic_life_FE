import Card from "@/components/Card";
import postLoader from "@/lib/postLoader";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: postLoader,
  component: RouteComponent,
});

function RouteComponent() {
  const posts = Route.useLoaderData();

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
