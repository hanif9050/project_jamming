import React from "react";
import styles from "./Track.module.css";
function Track() {
  return (
    <div className={styles.container}>
      <input className={styles.inputField} type="text" />
    </div>
  );
}

export default Track;
