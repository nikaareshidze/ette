import React from "react";
import Cocktails from "@/types/cocktails";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function HomepageCocktails() {
  const router = useRouter();

  return (
    <div className={styles.EtteCocktailsContainer}>
      <div className={styles.aboutEtteCocktails}>
        <h1 className={styles.aboutEtteCocktailsTitle}>Ette Cocktails</h1>
        <p className={styles.aboutEtteCocktailsDescription}>
          Who doesn’t love a cocktail? We work with the finest mixologists to
          help you get the most out of ette. Here’s our take on some cocktail
          classics.
        </p>
        <button>Explore</button>
      </div>
      <div className={styles.cocktailsContainer}>
        {Cocktails.map((item) => (
          <div
            className={styles.cocktailContainer}
            onClick={() =>
              router.push(`/cocktails/${encodeURIComponent(item.name)}`)
            }
          >
            <div className={styles.cocktailImageContainer}>
              <img src={item.imageUrl} />
            </div>
            <h1 className={styles.cocktailTitle}>{item.name}</h1>
            <h2 className={styles.cocktailRecipeButton}>view recipe</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
