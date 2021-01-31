import "../styles/globals.css";
import { Context } from "../contex";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

export default MyApp;
