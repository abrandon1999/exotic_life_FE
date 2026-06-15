import styles from "./ProfileButton.module.css";
interface Props {
  onHandleSubmit: () => void;
}
export default function ProfileButton({ onHandleSubmit }: Props) {
  return (
    <button className={styles.buttonGradientBorder} onClick={onHandleSubmit}>
      Done
    </button>
  );
}
