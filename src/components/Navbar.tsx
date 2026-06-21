import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { MdOutlineAddBox } from "react-icons/md";
//FIXME: replace with the signed-in user's id
const temp = "3b054c16-0e8d-4193-86a6-a6d0f3d2c28d";
export default function Navbar() {
  return (
    <div style={NavbarStyle}>
      <Link to="/" style={NavbarTextStyle}>
        Home
      </Link>
      <Link to="/about" style={NavbarTextStyle}>
        About
      </Link>
      <Link to="/profile/$userId" params={{ userId: temp }}>
        Profile
      </Link>
      <Link to="/login" style={NavbarTextStyle}>
        Login
      </Link>
      <Link to="/post">
        <MdOutlineAddBox size={ICON_SIZE} />
      </Link>
    </div>
  );
}
const ICON_SIZE = "30";
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
