import type { PostImage } from "@/lib/postLoader";
import type { CSSProperties } from "react";
import { BACKEND_BASE_URL } from "@/utils/variables";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { useState } from "react";
import styles from "./CardImage.module.css";
interface Props {
  images: PostImage[];
}
export default function CardImage({ images }: Props) {
  console.log(images);
  const [imageIndex, setImageIndex] = useState(0);
  if (images.length === 0) return null;

  return (
    <>
      <div style={imageSliderContainer}>
        <div
          style={{
            ...imageSliderListContainer,
            translate: `${-100 * imageIndex}%`,
            transition: "translate 400ms ease-in-out",
          }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={`${BACKEND_BASE_URL}${image.path}`}
              alt={"user images"}
              style={imageStyle}
            />
          ))}
        </div>
        <button
          className={styles.arrowButton}
          style={{
            ...imageSliderButton,
            left: 0,
          }}
          onClick={showPrevImage}
        >
          <FaArrowLeft
            size={ICON_SIZE}
            className={styles.arrowIcon}
          />
        </button>
        <button
          className={styles.arrowButton}
          style={{
            ...imageSliderButton,
            right: 0,
          }}
          onClick={showNextImage}
        >
          <FaArrowRight
            size={ICON_SIZE}
            className={styles.arrowIcon}
          />
        </button>
      </div>
      <div style={imageSliderDotContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            style={imageSliderDotButton}
            onClick={() => setImageIndex(index)}
          >
            {imageIndex === index ? <FaDotCircle /> : <FaRegCircle />}
          </button>
        ))}
      </div>
    </>
  );
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }
  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
}
const ICON_SIZE = 40;
const imageSliderContainer: CSSProperties = {
  width: "100%",
  height: "300px",
  backgroundColor: "dodgerblue",
  overflow: "hidden",
  position: "relative",
};
const imageSliderListContainer: CSSProperties = {
  display: "flex",
};

const imageStyle: CSSProperties = {
  flex: "0 0 100%",
  minWidth: "100%",
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
};
const imageSliderButton: CSSProperties = {
  all: "unset",
  position: "absolute",
  top: 0,
  bottom: 0,
  padding: "1rem",
  cursor: "pointer",
};
const imageSliderDotContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const imageSliderDotButton: CSSProperties = {
  all: "unset",
  cursor: "pointer",
  width: "1rem",
  height: "1rem",
  transition: "scale 200ms ease-in-out",
  border: "1px solid black",
  borderRadius: "50%",
  margin: "5px",
};
