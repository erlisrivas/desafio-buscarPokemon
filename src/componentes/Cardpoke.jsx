import '../index.css';
import React from 'react';
import { Card } from "react-bootstrap";

export default function Cardpoke({pokemon}) {

  return (
    
        <>
        <Card className="mt-5 mx-auto flex-row p-2 justify-content-between" style={{width:"34rem"}}>
            <Card.Img heigth="100" variant="top" src={pokemon.src}/>
            <Card.Body>
                <Card.Title className="fw-bold">{pokemon.name}</Card.Title>
                <ul className ="text-left">
                    <Card.Text>
                        {pokemon.stats?.map((stat, i) =>(
                            <li key={i}>
                                {stat.name}:{stat.base}
                            </li>
                        ))}
                    </Card.Text>
                </ul>
                <Card.Text className ="text-secundary">{pokemon.types}</Card.Text>
            </Card.Body>
        </Card>
        </>
       
  );
}

