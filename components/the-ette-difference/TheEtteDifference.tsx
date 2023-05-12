import React from "react";
import { ListOfIngredients } from "./list-of-ingredients";
import styles from "./styles.module.scss";

export default function TheEtteDifference() {
  return (
    <div className={styles.theEtteDifferenceContainer}>
      <h1 className={styles.theEtteDifferenceTitle}>The Ette Difference</h1>
      <ListOfIngredients />
      <p>
        Ette’s exploration to find the best botanicals spans all four corners of
        the world. Every <br />
        one of these hand-picked, one-of-a-kind ingredients is blended with
        six-times distilled <br /> vodka, creating a decadent floral taste that
        transports you with every sip.
      </p>
      <button>Learn More</button>
    </div>
  );
}
