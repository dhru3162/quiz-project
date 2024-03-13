import AppLayout from "@/src/Components/AppLayout/AppLayout";
import TitleComponent from "@/src/Components/TitleComponent/TitleComponent";
import { store } from "@/src/ReduxToolkit/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <TitleComponent />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        <Toaster
          position="top-right"
        />
      </Provider>
    </>
  )
}
