import React from "react";
import styles from "./styles.module.scss";

export default function FloraRosaDescription() {
  return (
    <div className={styles.floraRosaContainer}>
      <div className={styles.descriptionContainer}>
        <h1 className={styles.descriptionTitle}>Flora Rosa</h1>
        <p className={styles.descriptionText}>
          Ette’s Flora Rosa vodka is like nothing you’ve experienced before.
          Made from roses picked at full bloom in the Valley of Roses in Morocco
          and distilled six times, its both fragrant as a flowerbed and fresh as
          a pond. No artificial flavors, gluten-free, and 100% vegan, Flora Rosa
          is your new guilt-free bar cart staple. Take a sip and enter the
          garden...
        </p>
        <p className={styles.productSize}>37.5 ABV • 750 ML</p>
        <button>Buy Now</button>
        <p className={styles.descriptionPS}>
          p.s. i’m made with real roses <br /> and i'm gluten free
        </p>
      </div>
    </div>
  );
}
