import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import { Footer } from '../components/footer';
import NavHeader from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavHeader />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer></Footer>
    </>
  );
}

export default MyApp;
