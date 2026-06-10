import { type CSSProperties, type PointerEvent } from "react";
import styles from "./ColorSelection.module.css";

const SATURATION = 92;
const LIGHTNESS = 62;
const MARKER_RADIUS = 42;
const DEFAULT_COLOR = "#A78BFA";

interface Props {
  value: string;
  onColorChange: (color: string) => void;
}

export default function ColorSelection({ value, onColorChange }: Props) {
  const selectedColor = value || DEFAULT_COLOR;
  const hue = hexToHue(selectedColor);
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

    onColorChange(hslToHex(nextHue, SATURATION, LIGHTNESS));
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

function hexToHue(hexColor: string) {
  const normalizedHex = hexColor.replace("#", "");
  const red = parseInt(normalizedHex.slice(0, 2), 16) / 255;
  const green = parseInt(normalizedHex.slice(2, 4), 16) / 255;
  const blue = parseInt(normalizedHex.slice(4, 6), 16) / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;

  if (delta === 0) {
    return 0;
  }

  if (max === red) {
    return normalizeHue(Math.round(60 * (((green - blue) / delta) % 6)));
  }

  if (max === green) {
    return normalizeHue(Math.round(60 * ((blue - red) / delta + 2)));
  }

  return normalizeHue(Math.round(60 * ((red - green) / delta + 4)));
}

function normalizeHue(hue: number) {
  return (hue + 360) % 360;
}
