import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box } from '@mui/material';
import Feed from '../components/Feed';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  if (Component.getUserLayout) {
    return Component.getUserLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Box sx={{ backgroundColor: 'white' }}>
        <Navbar />
        <Feed>
          <Component {...pageProps} />
        </Feed>
      </Box>
    </>
  );
}

export default MyApp;
