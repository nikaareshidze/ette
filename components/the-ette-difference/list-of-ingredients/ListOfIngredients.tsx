import React from "react";
import Ingredient from "./Ingredient";
import styles from "./styles.module.scss";

export default function ListOfIngredients() {
  return (
    <div className={styles.ingredientsContainer}>
      <Ingredient
        title="Real Rose Petals"
        url="https://images.ctfassets.net/yk1xdh79orev/2ksQdFNcUH57plzKqX8Nt1/919bcc7cf385a248d3538f991377f3df/C01.png?w=300&h=300&q=100&fm=webp"
      />
      <Ingredient
        title="All-Natural Flavors"
        url="https://images.ctfassets.net/yk1xdh79orev/4UoGwFh5eNqGitnXH5JmFq/b4fdb0284604a91273244c46015a00aa/C02.png?w=300&h=300&q=100&fm=webp"
      />
      <Ingredient
        title="100% Gluten-Free"
        url="https://images.ctfassets.net/yk1xdh79orev/7tjdktVtq0Ur96tlnnIgE2/70a801ff788d2537fb834605e2cb3bd1/C03.png?w=300&h=300&q=100&fm=webp"
      />
      <Ingredient
        title="Six Times Distilled"
        url="https://images.ctfassets.net/yk1xdh79orev/35cSKsdbSMYdMddoHiAC87/f7b861d90e1d066105fe39cb2a69a991/C04__1_.png?w=300&h=300&q=100&fm=webp"
      />
    </div>
  );
}
