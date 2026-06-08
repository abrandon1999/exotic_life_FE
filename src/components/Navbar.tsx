import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
export default function Navbar() {
  return (
    <div style={NavbarStyle}>
      <Link to="/" style={NavbarTextStyle}>
        Home
      </Link>
      <Link to="/about" style={NavbarTextStyle}>
        About
      </Link>
      <Link to="/login" style={NavbarTextStyle}>
        Login
      </Link>
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
