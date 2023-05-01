import createEmotionCache from "@/helpers/create-emotion-cache";
import theme from "@/helpers/theme";
import "@/styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import CssBaseline, {} from '@mui/material/CssBaseline'

import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (

<CacheProvider value={emotionCache}>
<Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
      <CssBaseline />
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
    </ThemeProvider>
    </CacheProvider>
  );
}
