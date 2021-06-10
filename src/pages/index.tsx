import Header from '@/components/header/header';
import LayoutApp from '@/components/layoutApp/layoutApp';
import LayoutCards from '@/components/layoutCards/layoutCards';
import User from '@/components/user/user';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';
import pokemon from '../models/pokemon';

export default function Home({ data }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutApp
        leftContent={
          <>
            <User />
          </>
        }
        rightContent={
          <>
            <Header />
            <LayoutCards pokemon={data as pokemon[]} />
          </>
        }
      />
    </div>
  );
}

interface ResultInterface {
  name: string;
  url: string;
}
interface PokeInterface {
  results: ResultInterface[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const data: PokeInterface = await res.json();

  const dataa: pokemon[] = await Promise.all(
    data.results.map(({ url }) =>
      fetch(url).then((response) => response.json()),
    ),
  );
  return { props: { data: dataa } };
};
