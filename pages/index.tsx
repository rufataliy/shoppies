import React from "react";
import Head from "next/head";
import { Nominations } from "../components/Nominations";
import { SearchForm } from "../components/SearchForm";
import { useStore } from "../store";
import Container from "react-bootstrap/Container";
import { Movies } from "../components/Movies";
import { SideBar } from "../components";
import { useRouter } from "next/router";

export default function Home() {
  const { searchMovies } = useStore();
  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title key="home">Home | Shoppies</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000c08" />
        <meta name="theme-color" content="#000c08" />
      </Head>
      <SideBar />
      <div className="main-title text-center pt-5">
        <h1>Shoppies</h1>
        <h5 className="mb-0">
          by{" "}
          <a target="_blank" href="https://rufat.tech/">
            Rufat
          </a>
        </h5>
      </div>
      <div className="search-area">
        <Container>
          <SearchForm onSubmit={(params) => searchMovies(params)} />
        </Container>
      </div>
      <main>
        <div className="main-content">
          <Nominations />
          <Movies />
        </div>
      </main>

      <footer>
        <div className="footer-content p-5">
          Created with love for{" "}
          <a target="_blank" href="https://www.shopify.ca/">
            Shopify
          </a>{" "}
          by{" "}
          <a target="_blank" href="https://rufat.tech/">
            Rufat Aliyev
          </a>
        </div>
      </footer>
    </div>
  );
}
