import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../componants/Nav";
import Footer from "../componants/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div className="container">
      <nav className="nav">
        <Nav />
      </nav>
      <main className="main">
        <Component {...pageProps} />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  </>;
}
