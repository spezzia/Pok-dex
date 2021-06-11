import Header from '@/components/header/header';
import LayoutApp from '@/components/layoutApp/layoutApp';
import LayoutCards from '@/components/layoutCards/layoutCards';
import User from '@/components/user/user';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import ErrorPage from 'next/error';
import styles from '../styles/Home.module.css';

export default function Home({ data }: any) {
  if (!data) {
    return <ErrorPage statusCode={404} />;
  }
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
            <LayoutCards pokemon={data as PokeInterface} />
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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const data: PokeInterface = await resp.json();
    return { props: { data } };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
