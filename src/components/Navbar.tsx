import type { CSSProperties } from "react";

export default function Navbar() {
  return (
    <div style={NavbarStyle}>
      <span style={NavbarTextStyle}>Home</span>
      <span style={NavbarTextStyle}>About</span>
      <span style={NavbarTextStyle}>Login</span>
    </div>
  );
}

const NavbarStyle: CSSProperties = {
  height: "50px",
  width: "100%",
  padding: "10px",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const NavbarTextStyle: CSSProperties = {
  color: "#000",
  cursor: "pointer",
};
