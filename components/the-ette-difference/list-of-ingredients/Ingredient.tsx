import React from "react";
import styles from "./styles.module.scss";

export default function Ingredient({ title, url }: any) {
  return (
    <div className={styles.ingredientContainer}>
      <img src={url} alt={title} width="81px" height="81px" />
      <h1>{title}</h1>
    </div>
  );
}
