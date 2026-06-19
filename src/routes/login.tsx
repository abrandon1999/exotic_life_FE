import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import styles from "./-login.module.css";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import { BACKEND_BASE_URL } from "@/utils/variables";
import { useNavigate } from "@tanstack/react-router";
export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <div style={container}>
      <div className={styles.formContainer}>
        <p className={styles.title}>Login</p>
        <form action={handleLoginForm} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="emaill"
              defaultValue={"abrandon1999@yahoo.com"}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              defaultValue={"queen1205"}
            />
          </div>
          <div className={styles.forgot}>
            <span>Forgot Password?</span>
          </div>
          <button type="submit" className={styles.sign}>
            Sign in
          </button>
        </form>
        <div className={styles.socialMessage}>
          <div className={styles.line}></div>
          <p className={styles.message}>Login with social accounts</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.socialIcons}>
          <FaGoogle size={ICON_SIZE} />
          <FaXTwitter size={ICON_SIZE} />
          <FaGithub size={ICON_SIZE} />
        </div>
        <div className={styles.forgot}>
          <span>Don't have an account?</span>
        </div>
        <Link to="/register" className={styles.sign}>
          Register
        </Link>
      </div>
    </div>
  );
  async function handleLoginForm(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const loginFormObj = { email, password };

    //TODO: configure fetch the send registerFormObj to backend
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(loginFormObj),
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      // const responseBody = await response.json();
      navigate({ to: "/" });
    } catch (error) {
      console.log(error);
    }
  }
}
const ICON_SIZE = "30";
const container: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100vh",
  justifyContent: "center",
};
