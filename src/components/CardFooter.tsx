import type { CSSProperties } from "react";
interface Props {
  children: React.ReactNode;
}
export default function CardFooter({ children }: Props) {
  return <div style={footerStyle}>{children}</div>;
}

const footerStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
};
