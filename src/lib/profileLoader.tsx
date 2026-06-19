import { BACKEND_BASE_URL } from "@/utils/variables";
type ProfileImage = {
  id: string;
  userId: string;
  filename: string;
  path: string;
  mimetype: string;
  size: number;
  isProfile: boolean;
};

type Profile = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  color: string | null;
  interests: string[] | null;
  userId: string;
  imageId: string | null;
  image: ProfileImage | null;
  userRequest: string | null | undefined;
};

type ProfileLoaderArgs = {
  params: {
    userId: string;
  };
};

export default async function profileLoader({
  params,
}: ProfileLoaderArgs): Promise<Profile> {
  const response = await fetch(
    `${BACKEND_BASE_URL}/api/profile/${params.userId}`,
    {
      credentials: "include",
    },
  );
  if (!response.ok) {
    throw new Error(`Profile request failed: ${response.status}`);
  }

  const data = await response.json();
  assertProfile(data);
  return data;
}

function assertProfile(value: unknown): asserts value is Profile {
  if (!isObject(value)) throw new Error("Invalid profile response");
  if (typeof value.id !== "string") throw new Error("Invalid profile id");
  if (typeof value.userId !== "string")
    throw new Error("Invalid profile userId");
  if (!isNullableString(value.firstName)) throw new Error("Invalid firstName");
  if (!isNullableString(value.lastName)) throw new Error("Invalid lastName");
  if (!isNullableString(value.gender)) throw new Error("Invalid gender");
  if (!isNullableString(value.color)) throw new Error("Invalid color");
  if (!isNullableString(value.imageId)) throw new Error("Invalid imageId");
  if (
    value.interests !== null &&
    (!Array.isArray(value.interests) ||
      !value.interests.every((interest) => typeof interest === "string"))
  ) {
    throw new Error("Invalid interests");
  }

  if (value.image !== null) assertProfileImage(value.image);
}

function assertProfileImage(value: unknown): asserts value is ProfileImage {
  if (!isObject(value)) throw new Error("Invalid profile image");
  if (typeof value.id !== "string") throw new Error("Invalid image id");
  if (typeof value.userId !== "string") throw new Error("Invalid image userId");
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
