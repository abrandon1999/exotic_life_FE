import styles from "./ProfileButton.module.css";

interface Props {
  onHandleSubmit?: () => void;
}

export default function ProfileButton({ onHandleSubmit }: Props) {
  return (
    <button
      type={onHandleSubmit ? "button" : "submit"}
      className={styles.buttonGradientBorder}
      onClick={onHandleSubmit}
    >
      Done
    </button>
  );
}
