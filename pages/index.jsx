import { useState } from 'react'
import Head from "next/head";

import Title from "/src/components/title/Title"
import Subtitle from "/src/components/subtitle/Subtitle"
import Button from "/src/components/button/Button"

/* Exemplo de componente React com children (filhos)
useState: só pode ser usado dentro da função, dentro da função useState passar o valor da váriavel*/

let cliques = 0

function HomePage() {

  const [click, setClick] = useState(0)

  const handleClick = () => {
    console.log("HANDLE CLICK")
    setClick(click + 1)
  }

  return (
    <>
      <Head>
        <title>Titulo diferente da home page</title>
      </Head>
      <div>
        <Title>Um titulo</Title>
        <Subtitle text="Um subtitulo" />
        <Title>Outro titulo</Title>
        <Subtitle text="Outro subtitulo" />
        <Button onClick={handleClick}>Botão teste</Button>
        <p>Cliques: {click}</p>
      </div>
    </>
  )
}

export default HomePage;
