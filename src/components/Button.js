import React from "react";
import styles from "../styles/Register.module.css";

function Button({ variant = "primary", text = "Button", onClick }) {
  return (
    <div className={`${styles.btn} ${styles[variant]}`} onClick={onClick}>
      <p className={styles["btn-text"]}>{text}</p>
    </div>
  );
}

export default Button;
