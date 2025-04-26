import { GoogleTagManager } from "@next/third-parties/google";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export const metadata = {
  title: 'QuizWiz - The Best Quiz Platform',
  description: 'Challenge your knowledge with fun quizzes!',
  alternates: {
    canonical: "https://quizwiz.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Start Google Analytics and Google Tag Manager --> */}
        <GoogleTagManager gtmId={process.env.GTM_ID!} />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_ID}');
          `}
        </Script>
        {/* <!-- End Google Analytics and Google Tag Manager --> */}
        <meta name="Dhru Viramgama" content="This is amazing web app for playing quiz" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}