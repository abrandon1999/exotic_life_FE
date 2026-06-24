import { createFileRoute, redirect } from "@tanstack/react-router";
import { type CSSProperties, useEffect, useMemo, useState } from "react";
import Button from "@/components/Button";
import { buttonContainerStyle } from "@/utils/styles";
import { BACKEND_BASE_URL } from "@/utils/variables";
export const Route = createFileRoute("/post")({
  beforeLoad: async () => {
    const response = await fetch(`${BACKEND_BASE_URL}/api/auth/me`, {
      credentials: "include",
      cache: "no-store",
    });

    if (!response.ok) {
      throw redirect({ to: "/login" });
    }
  },
  component: RouteComponent,
});

const MAX_IMAGES = 4;

function RouteComponent() {
  const [postInfo, setPostInfo] = useState({ title: "", description: "" });
  const [postImages, setPostImages] = useState<File[]>([]);
  const imagePreviews = useMemo(
    () =>
      postImages.map((image) => ({
        file: image,
        url: URL.createObjectURL(image),
      })),
    [postImages],
  );

  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview) => {
        URL.revokeObjectURL(preview.url);
      });
    };
  }, [imagePreviews]);
  //Each time you call ```createObjectURL()```, a new object URL is
  //created, even if you've already created one for the same object.
  //Each of these must be released by calling ```URL.revokeObjectURL()```
  //when you no longer need them.

  //Browsers will release object URLs automatically when the document is
  //unloaded; however, for optimal performance and memory usage, if there
  //are safe times when you can explicitly unload them, you should do so.
  return (
    <div style={container}>
      <form action={handleSubmit} style={formStyle}>
        <div style={inputGroup}>
          <label htmlFor="Title" style={labelStyle}>
            {"Title"}
          </label>
          <input
            type="text"
            style={inputStyle}
            name="title"
            value={postInfo.title}
            onChange={(event) => {
              setPostInfo({ ...postInfo, title: event.target.value });
            }}
          />
        </div>
        <div style={inputGroup}>
          <label htmlFor="description" style={labelStyle}>
            {"Description"}
          </label>
          <input
            type="text"
            style={inputStyle}
            name="description"
            value={postInfo.description}
            onChange={(event) => {
              setPostInfo({ ...postInfo, description: event.target.value });
            }}
          />
        </div>
        <div style={inputGroup}>
          <label htmlFor="post-image" style={labelStyle}>
            Photo
          </label>
          <input
            type="file"
            name="images"
            id="post-image"
            style={inputStyle}
            accept="image/*"
            multiple
            onChange={(event) => {
              const selectedImages = Array.from(event.target.files ?? []);
              setPostImages((currentImages) => {
                const imageMap = new Map(
                  currentImages.map((image) => [getImageKey(image), image]),
                );

                selectedImages.forEach((image) => {
                  const imageKey = getImageKey(image);
                  if (imageMap.has(imageKey) || imageMap.size < MAX_IMAGES) {
                    imageMap.set(imageKey, image);
                  }
                });

                return Array.from(imageMap.values());
              });
              event.target.value = "";
            }}
          />
        </div>
        {postImages.length > 0 ? (
          <ul style={imageGridStyle}>
            {imagePreviews.map((preview) => (
              <li
                key={`${preview.file.name}-${preview.file.lastModified}`}
                style={imageItemStyle}
              >
                <img
                  src={preview.url}
                  alt={preview.file.name}
                  style={imagePreviewStyle}
                />
              </li>
            ))}
          </ul>
        ) : null}
        <div style={buttonContainerStyle}>
          <Button label="Post" />
        </div>
      </form>
    </div>
  );

  function handleSubmit(formData: FormData) {
    formData.set("title", postInfo.title);
    formData.set("description", postInfo.description);
    formData.delete("images");
    postImages.forEach((image) => {
      formData.append("images", image);
    });

    console.log({
      title: formData.get("title"),
      description: formData.get("description"),
      images: formData.getAll("images"),
    });
  }
}

function getImageKey(image: File) {
  return `${image.name}-${image.size}-${image.lastModified}`;
}

const container: CSSProperties = {
  padding: "1rem",
  minHeight: "100vh",
};

const formStyle: CSSProperties = {
  maxWidth: "400px",
  margin: "0 auto",
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

const imageGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "0.75rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const imageItemStyle: CSSProperties = {
  aspectRatio: "1 / 1",
  overflow: "hidden",
  borderRadius: "0.375rem",
  border: "1px solid rgba(55,65,81,1)",
  backgroundColor: "rgba(17,24,39,1)",
};

const imagePreviewStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
};
