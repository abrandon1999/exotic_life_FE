import { BACKEND_BASE_URL } from "@/utils/variables";
type PostImage = {
  id: string;
  userId: string;
  postId: string | null;
  filename: string;
  path: string;
  mimetype: string;
  size: number;
  isProfile: boolean;
};

type Post = {
  id: string;
  title: string;
  description: string | null;
  userId: string;
  images: PostImage[];
  createdAt: string;
  updatedAt: string;
};
export default async function postLoader(): Promise<Post[]> {
  const response = await fetch(`${BACKEND_BASE_URL}/api/post`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Post request failed: ${response.status}`);
  }

  const posts = await response.json();
  assertPosts(posts);
  return posts;
}

function assertPosts(value: unknown): asserts value is Post[] {
  if (!Array.isArray(value)) throw new Error("Invalid posts response");
  value.forEach(assertPost);
}

function assertPost(value: unknown): asserts value is Post {
  if (!isObject(value)) throw new Error("Invalid post");
  if (typeof value.id !== "string") throw new Error("Invalid post id");
  if (typeof value.title !== "string") throw new Error("Invalid post title");
  if (!isNullableString(value.description)) {
    throw new Error("Invalid post description");
  }
  if (typeof value.userId !== "string") throw new Error("Invalid post userId");
  if (typeof value.createdAt !== "string") {
    throw new Error("Invalid post createdAt");
  }
  if (typeof value.updatedAt !== "string") {
    throw new Error("Invalid post updatedAt");
  }
  if (!Array.isArray(value.images)) throw new Error("Invalid post images");
  value.images.forEach(assertPostImage);
}

function assertPostImage(value: unknown): asserts value is PostImage {
  if (!isObject(value)) throw new Error("Invalid post image");
  if (typeof value.id !== "string") throw new Error("Invalid image id");
  if (typeof value.userId !== "string") throw new Error("Invalid image userId");
  if (!isNullableString(value.postId)) throw new Error("Invalid image postId");
  if (typeof value.filename !== "string") throw new Error("Invalid filename");
  if (typeof value.path !== "string") throw new Error("Invalid image path");
  if (typeof value.mimetype !== "string") throw new Error("Invalid mimetype");
  if (typeof value.size !== "number") throw new Error("Invalid image size");
  if (typeof value.isProfile !== "boolean") {
    throw new Error("Invalid image profile flag");
  }
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isNullableString(value: unknown): value is string | null {
  return typeof value === "string" || value === null;
}
