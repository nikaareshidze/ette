import React from "react";
import Logo from "./Logo";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h1 className={styles.gridOne}>
        © Ette Spirits, LLC. All Rights Reserved
      </h1>
      <div className={styles.gridTwo}>
        <Logo />
      </div>
      <div className={styles.footerNavigationContainer}>
        <h1>Terms & Conditions</h1>
        <h1>Privacy Policy</h1>
        <h1>Drink Responsibly</h1>
        <h1>Site Credit</h1>
      </div>
    </div>
  );
}
