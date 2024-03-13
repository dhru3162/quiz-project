import AppLayout from "@/src/Components/AppLayout/AppLayout";
import { ContextProvider } from "@/src/Components/Context/ContextProvider";
import TitleComponent from "@/src/Components/TitleComponent/TitleComponent";
import { store } from "@/src/ReduxToolkit/store";
import "@/styles/globals.scss";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
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
