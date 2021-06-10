import { AppProps } from 'next/app';
import '@/styles/global.css';
import AppContext from '@/components/context/context';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}
