import Head from "next/head";

import Title from "/src/components/title/Title";
import Subtitle from "/src/components/subtitle/Subtitle";

function HomePage() {
  return (
    <>
      <Head>
        <title>Titulo diferente da home page</title>
      </Head>
      <div>
        <Title>Abertura</Title>
        <Subtitle text="Um subtitulo" />
        Hello world, NextJs + ReactJs
        <Subtitle text="Outro subtitulo" />
      </div>
    </>
  );
}

export default HomePage;
