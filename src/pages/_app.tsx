import createEmotionCache from "@/helpers/create-emotion-cache";
import "nprogress/nprogress.css";
import theme from "@/helpers/theme";
import "@/styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import CssBaseline, {} from '@mui/material/CssBaseline'
import NProgress from "nprogress";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

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
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;


  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
 
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);
 
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

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
