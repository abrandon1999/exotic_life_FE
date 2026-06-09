import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./ProfileFooter.module.css";

interface Props {
  page: number;
  onPaginate: (page: number) => void;
}
export default function ProfileFooter({ page, onPaginate }: Props) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={() => onPaginate(page - 1)}
        disabled={page <= 1}
      >
        <FaArrowLeft aria-hidden="true" />
        <span>Prev</span>
      </button>
      <span className={styles.page}>{page}</span>
      <button
        className={`${styles.button} ${styles.primary}`}
        type="button"
        onClick={() => onPaginate(page + 1)}
        disabled={page >= 3}
      >
        <span>Next</span>
        <FaArrowRight aria-hidden="true" />
      </button>
    </div>
  );
}
