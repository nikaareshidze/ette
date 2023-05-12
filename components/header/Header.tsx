import React from "react";
import Logo from "./Logo";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerNavigationContainer}>
        <h1>Shop Vodka</h1>
        <h1>Learn More</h1>
        <h1>Find Ette</h1>
      </div>
      <Logo />
      <div className={styles.headerNavigationContainer}>
        <h1>Cocktail Recipes</h1>
        <h1>Sustainability</h1>
        <h1>0</h1>
      </div>
    </div>
  );
}
