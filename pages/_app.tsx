import SEOComponent from "@/src/Components/SEOComponent/SEOComponent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEOComponent />
      <Component {...pageProps} />
    </>
  )
}
