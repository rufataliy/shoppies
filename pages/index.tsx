import React from "react";
import Head from "next/head";
import { Nominations } from "../components/Nominations";
import { SearchForm } from "../components/SearchForm";
import { useStore } from "../store";
import Container from "react-bootstrap/Container";

export default function Home() {
  const { searchMovies } = useStore();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="search-area">
        <Container>
          <SearchForm onSubmit={(params) => searchMovies(params)} />
        </Container>
      </div>

      <main>
        <div className="main-content">
          <Nominations />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
