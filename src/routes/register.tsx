import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./-login.module.css";
//import { url } from "@/utils/variables";
export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={container}>
      <div className={styles.formContainer}>
        <p className={styles.title}>Register</p>
        <form action={handleRegisterForm} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit" className={styles.sign}>
            Register
          </button>
        </form>
        <div className={styles.socialMessage}>
          <div className={styles.line}></div>
          <p className={styles.message}>Register with social accounts</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.socialIcons}>
          <FaGoogle size={ICON_SIZE} />
          <FaXTwitter size={ICON_SIZE} />
          <FaGithub size={ICON_SIZE} />
        </div>
        <div className={styles.forgot}>
          <span>Already have an account?</span>
        </div>
        <Link to="/login" className={styles.sign}>
          Sign in
        </Link>
      </div>
    </div>
  );
}
async function handleRegisterForm(formData: FormData) {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const registerFormObj = { name, username, password };
  console.log(registerFormObj);
  //TODO: configure fetch the send registerFormObj to backend
  // const res = await fetch(url, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   method: "POST",
  // });
}
const ICON_SIZE = "30";
const container: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100vh",
  justifyContent: "center",
};
