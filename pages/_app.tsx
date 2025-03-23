import AppLayout from "@/src/Components/AppLayout/AppLayout";
import { ContextProvider } from "@/src/Components/Context/ContextProvider";
import TitleComponent from "@/src/Components/TitleComponent/TitleComponent";
import { store } from "@/src/ReduxToolkit/store";
import "@/styles/globals.scss";
import 'react-circular-progressbar/dist/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const GTM_ID = ""

  useEffect(() => {
    // Initialize GTM
    TagManager.initialize({ gtmId: GTM_ID });

    // Function to trigger a page view event
    const handleRouteChange = (url: any) => {
      window.dataLayer = window?.dataLayer || [];
      window?.dataLayer.push({
        event: "pageView",
        page: url,
      });
    };

    // Listen for route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Provider store={store}>
        <ContextProvider>
          <NextUIProvider>
            <TitleComponent />
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
            <Toaster
              position="top-right"
            />
          </NextUIProvider>
        </ContextProvider>
      </Provider>
    </>
  )
}
