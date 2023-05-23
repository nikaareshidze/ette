import {
  FloraRosa,
  Header,
  HomepageCocktails,
  TheEtteDifference,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ette</title>
        <meta name="description" content="Create By Aresha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <TheEtteDifference />
        <FloraRosa />
        <HomepageCocktails />
      </main>
    </>
  );
}
