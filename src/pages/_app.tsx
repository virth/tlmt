import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import { Footer } from '../components/footer';
import NavHeader from '../components/navbar';

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_ENABLED = process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED === 'true';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain={PLAUSIBLE_DOMAIN || 'tlmt.ch'} enabled={PLAUSIBLE_ENABLED}>
      <NavHeader />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer></Footer>
    </PlausibleProvider>
  );
}

export default MyApp;
