interface Cocktail {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  method: string[];
  imageUrl: string;
}

const Cocktails: Cocktail[] = [
  {
    id: 1,
    name: "Marie Antoin-ette",
    description:
      "A spritz crafted in the spirit of versailles, with roses that only Ette and Marie herself could call familiar.",
    ingredients: ["1 oz Ette Flora Rosa Vodka", "1.5 oz Champagne "],
    method: ["Fill a large wine glass with plenty of ice"],
    imageUrl:
      "https://images.ctfassets.net/yk1xdh79orev/22NJxFoYOJ2P4tsvDypbu9/41e7064a32a6992f84a63506acd6bb10/EtteSpirits_August2022_Spritz_v4.jpg?w=2667&h=4000&q=50&fm=webp",
  },
  {
    id: 2,
    name: "Strawberry Mint Fizz",
    description:
      "Proudly showcasing the fruits of its labor, Ette’s Strawberry Daiquirette will transport you to the warmest of summer evenings, wherever you are.",
    ingredients: ["1.5 oz Ette Flora Rosa Vodka", "5 Mint leaves"],
    method: ["Lightly muddle the mint, strawberries, and syrup in a shaker"],
    imageUrl:
      "https://images.ctfassets.net/yk1xdh79orev/23bqM3JKQjAKbOnf4OfOQG/be8d1e056a86bd4a22dacb18f4ab6668/EtteSpirits_August2022_Drink05_v3__1_.jpg?w=2941&h=4000&q=50&fm=webp",
  },
];

export default Cocktails;
