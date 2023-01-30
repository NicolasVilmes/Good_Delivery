import { AppContextProvider } from "@/contexts/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function Myapp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default Myapp;
