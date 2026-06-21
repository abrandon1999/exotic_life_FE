import { createFileRoute } from "@tanstack/react-router";
import { type CSSProperties, useState } from "react";

export const Route = createFileRoute("/post")({
  component: RouteComponent,
});

function RouteComponent() {
  const [postImage, setPostImage] = useState<File | null>(null);

  return (
    <div style={container}>
      <form action={handleSubmit} style={formStyle}>
        <div style={inputGroup}>
          <label htmlFor="post-image" style={labelStyle}>
            Photo
          </label>
          <input
            type="file"
            name="image"
            id="post-image"
            style={inputStyle}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) setPostImage(file);
            }}
          />
        </div>
        {postImage ? <p style={fileNameStyle}>{postImage.name}</p> : null}
      </form>
    </div>
  );

  function handleSubmit(formData: FormData) {
    if (postImage) formData.set("image", postImage);
    console.log(Object.fromEntries(formData));
  }
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

const fileNameStyle: CSSProperties = {
  color: "rgba(243,244,246,1)",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
};
