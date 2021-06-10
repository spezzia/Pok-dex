import Header from '@/components/header/header';
import LayoutApp from '@/components/layoutApp/layoutApp';
import User from '@/components/user/user';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

export default function Details({ data }: any) {
  return (
    <div>
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
          </>
        }
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params !== undefined ? params.id : ``;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();
  return { props: { data } };

  // Pass data to the page via props
};
