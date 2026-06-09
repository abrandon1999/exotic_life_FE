import styles from "./GenderRadio.module.css";
export default function GenderRadio() {
  return (
    <div className={styles.mydict}>
      <div>
        <label>
          <input type="radio" name="radio" checked />
          <span>Women</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Men</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Divided</span>
        </label>
      </div>
    </div>
  );
}
