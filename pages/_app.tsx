import SEOComponent from "@/src/Components/SEOComponent/SEOComponent";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEOComponent />
      <Component {...pageProps} />
      <Toaster
        position="top-right"
      />
    </>
  )
}
