import { DefaultSeo } from "next-seo";
import DefaultSeoInfo from "next-seo.config";
import type { AppProps } from "next/app";
import { useState } from "react";
import "@styles/font.css";
import { Applayout } from "~/@components/templates/Applayout";
import GlobalStyle from "~/@styles/GlobalStyle";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Applayout>
        <DefaultSeo {...DefaultSeoInfo} />
        <GlobalStyle />
        <Component {...pageProps} />
      </Applayout>
    </QueryClientProvider>
  );
}
