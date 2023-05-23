import { GetStaticPaths, GetStaticProps } from "next";
import Cocktails from "@/types/cocktails";
import { Header } from "@/components";
import styles from "./styles.module.scss";

interface Cocktail {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  method: string[];
  imageUrl: string;
}

const CocktailPage = ({ cocktail }: { cocktail: Cocktail }) => {
  return (
    <div>
      <Header />
      <div className={styles.cocktailInformationContainer}>
        <div className={styles.cocktailImageContainer}>
          <img src={cocktail.imageUrl} />
        </div>
        <div className={styles.cocktailInformation}>
          <h1 className={styles.cocktailName}>{cocktail.name}</h1>
          <p className={styles.cocktailDescription}>{cocktail.description}</p>
          <div className={styles.cocktailIngredientsContainer}>
            <h1 className={styles.cocktailIngredientsTitle}>Ingredients</h1>
            <ul>
              {cocktail.ingredients.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.cocktailMethodContainer}>
            <h1 className={styles.cocktailMethodTitle}>Method</h1>
            <ul>
              {cocktail.method.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Cocktails.map((cocktail) => ({
    params: { name: cocktail.name },
  }));

  return {
    paths,
    fallback: false, // Set to true if you want to enable fallback rendering for non-existent name
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const name = params?.name as string;
  const cocktail = Cocktails.find((c) => c.name === name);

  if (!cocktail) {
    // Handle case when the cocktail with the given name doesn't exist
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cocktail,
    },
  };
};
