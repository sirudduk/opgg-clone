import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import SearchSummoner from '@/components/pages/summoner/SearchSummoner';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Header>
        <SearchSummoner />
      </Header>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
