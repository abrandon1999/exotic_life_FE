import type { CSSProperties } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
interface Props {
  page: number;
}
export default function ProfileHeader({ page }: Props) {
  return (
    <div style={container}>
      <div style={block}>
        {page > 1 ? (
          <FaRegCheckCircle size={SIZE} color={COLOR} />
        ) : (
          <FaRegCircle size={SIZE} />
        )}
        <p style={page > 1 ? textGreen : text}>Step 1</p>
        <div style={page > 1 ? lineColor : line}></div>
      </div>
      <div style={block}>
        {page > 2 ? (
          <FaRegCheckCircle size={SIZE} color={COLOR} />
        ) : (
          <FaRegCircle size={SIZE} />
        )}
        <p style={page > 2 ? textGreen : text}>Step 2</p>
        <div style={page > 2 ? lineColor : line}></div>
      </div>
      <div style={block}>
        <FaRegCircle size={SIZE} />
        <p style={text}>Step 3</p>
      </div>
    </div>
  );
}
const SIZE = "40";
const COLOR = "green";
const LENGTH = "75px";
const FONT_SIZE = "0.60rem";
const MARGINLEFT = "5px";
const container: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};
const block: CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const line: CSSProperties = {
  width: LENGTH,
  height: "3px",
  borderStyle: "solid",
  borderColor: "#fff",
  marginLeft: "5px",
  marginRight: "5px",
};
const lineColor: CSSProperties = {
  width: LENGTH,
  height: "3px",
  borderStyle: "solid",
  borderColor: COLOR,
  marginLeft: "5px",
  marginRight: "5px",
};
const text: CSSProperties = {
  fontSize: FONT_SIZE,
  fontWeight: 600,
  marginLeft: MARGINLEFT,
};
const textGreen: CSSProperties = {
  fontSize: FONT_SIZE,
  fontWeight: 600,
  marginLeft: MARGINLEFT,
  color: COLOR,
};
