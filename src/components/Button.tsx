import styles from "./Button.module.css";

interface Props {
  onHandleSubmit?: () => void;
  label: string;
}

export default function ProfileButton({ onHandleSubmit, label }: Props) {
  return (
    <button
      type={onHandleSubmit ? "button" : "submit"}
      className={styles.buttonGradientBorder}
      onClick={onHandleSubmit}
    >
      {label}
    </button>
  );
}
