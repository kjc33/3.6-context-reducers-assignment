import styles from "./Input.module.css";

function Input({ type, label, value, onChange }) {
  return (
    <div className={styles.container}>
      <label>{label}</label>

      <input type={type} className={styles.input} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
