import React from "react";
import FloraRosaDescription from "./flora-rosa-description/FloraRosaDescription";
import FloraImage from "./image-container/FloraImage";
import styles from "./styles.module.scss";

export default function FloraRosa() {
  return (
    <div className={styles.floraContainer}>
      <FloraImage />
      <FloraRosaDescription />
    </div>
  );
}
