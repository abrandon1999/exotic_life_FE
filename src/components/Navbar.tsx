import type { CSSProperties } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { MdOutlineAddBox } from "react-icons/md";
import { BACKEND_BASE_URL } from "@/utils/variables";
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={NavbarStyle}>
      <Link to="/" style={NavbarTextStyle}>
        Home
      </Link>
      <Link to="/about" style={NavbarTextStyle}>
        About
      </Link>
      <button onClick={() => handleProfile(navigate)}>Profile</button>
      <Link to="/login" style={NavbarTextStyle}>
        Login
      </Link>
      <Link to="/post">
        <MdOutlineAddBox size={ICON_SIZE} />
      </Link>
    </div>
  );
}
type Navigate = ReturnType<typeof useNavigate>;

async function handleProfile(navigate: Navigate) {
  const response = await fetch(`${BACKEND_BASE_URL}/api/auth/me`, {
    credentials: "include",
    cache: "no-store",
  });
  if (!response.ok) {
    navigate({ to: "/login" });
    return;
  }
  const result = (await response.json()) as { userId: string };
  navigate({ to: "/profile/$userId", params: { userId: result.userId } });
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
