import { type CSSProperties, type PointerEvent, useState } from "react";
import styles from "./ColorSelection.module.css";

const SATURATION = 92;
const LIGHTNESS = 62;
const MARKER_RADIUS = 42;

export default function ColorSelection() {
  const [hue, setHue] = useState(270);
  const selectedColor = hslToHex(hue, SATURATION, LIGHTNESS);
  const markerAngle = ((hue - 90) * Math.PI) / 180;
  const markerX = 50 + Math.cos(markerAngle) * MARKER_RADIUS;
  const markerY = 50 + Math.sin(markerAngle) * MARKER_RADIUS;

  const wheelStyle = {
    "--marker-x": `${markerX}%`,
    "--marker-y": `${markerY}%`,
    "--selected-color": selectedColor,
  } as CSSProperties;

  function handlePointer(event: PointerEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const nextHue = Math.round(((angle * 180) / Math.PI + 90 + 360) % 360);

    setHue(nextHue);
  }

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    handlePointer(event);
  }

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      handlePointer(event);
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.label}>Favorite color</p>
      <div className={styles.picker}>
        <button
          type="button"
          className={styles.wheel}
          style={wheelStyle}
          aria-label={`Selected color ${selectedColor}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
        >
          <span className={styles.marker}></span>
        </button>
        <div className={styles.selection}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: selectedColor }}
            aria-hidden="true"
          ></span>
          <span className={styles.value}>{selectedColor}</span>
        </div>
      </div>
      <input type="hidden" name="favoriteColor" value={selectedColor} />
    </div>
  );
}

function hslToHex(hue: number, saturation: number, lightness: number) {
  const s = saturation / 100;
  const l = lightness / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = l - c / 2;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (hue < 60) {
    red = c;
    green = x;
  } else if (hue < 120) {
    red = x;
    green = c;
  } else if (hue < 180) {
    green = c;
    blue = x;
  } else if (hue < 240) {
    green = x;
    blue = c;
  } else if (hue < 300) {
    red = x;
    blue = c;
  } else {
    red = c;
    blue = x;
  }

  return [red, green, blue]
    .map((channel) =>
      Math.round((channel + m) * 255)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")
    .toUpperCase()
    .padStart(7, "#");
}
