import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box } from '@mui/material';
import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { StoreProvider } from '../utils/store';
import React from 'react';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        {Component.getUserLayout ? (
          Component.getUserLayout(<Component {...pageProps} />)
        ) : (
          <Box sx={{ backgroundColor: 'white' }}>
            <Navbar />
            <Feed>
              <Component {...pageProps} />
            </Feed>
          </Box>
        )}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </StoreProvider>
  );
}

export default MyApp;
