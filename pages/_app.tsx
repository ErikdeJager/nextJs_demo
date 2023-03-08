import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NumberContext from "@/contexts/NumberContext";
import {useState} from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [num, setNum] = useState(0);

  return (
      <NumberContext.Provider value={{num, setNum}}>
        <Component {...pageProps} />
      </NumberContext.Provider>
  )
}
