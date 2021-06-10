import Header from '@/components/header/header';
import LayoutApp from '@/components/layoutApp/layoutApp';
import User from '@/components/user/user';
import Head from 'next/head';
import DetailsPoke from '@/components/details/details';

import { GetServerSideProps } from 'next';

export default function Details({ data }: any) {
  return (
    <div>
      <Head>
        <title>Details</title>
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
            <DetailsPoke info={data} />
          </>
        }
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params !== undefined ? params.id : `0`;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();
  return { props: { data } };

  // Pass data to the page via props
};
