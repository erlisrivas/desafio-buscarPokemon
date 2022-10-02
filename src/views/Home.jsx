import React from 'react'
import { Container } from "react-bootstrap";
import pokemon from "../componentes/pokemon.jpg"

export default function Home() {
    return (
      <Container className="cnter text-center d-flex-column mt-5">
      <h1 className="pt-5">
        Bienvenido Maestro pokemon
      </h1>
      <img className="pastel" src={pokemon} alt="" width="400"/>
      <h2 className="title5"> ¡Vamos a conseguir Pokémon! </h2>
    </Container>
    );
  }
  