import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import { Button } from "react-bootstrap";


export default function Pokemon() {
    const [pokemon, setPokemon] = useState ([]);
    const [pokeSel, setPokesel] = useState("");
    const navigate = useNavigate ();

  const url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

  const getPokemon = async () => {
    const res = await fetch(url);
    const { results } = await res.json();
    setPokemon(results);

    console.log(results);
  }
  
  const irPokemon = () => {
      if (pokeSel) navigate(`/pokemon/${pokeSel}`);
      else alert ("debe seleccionar pokemon");
  };

  useEffect(()=>{
    getPokemon();
  }, []);

return (
 <>
 <div className ="mt-5 text-center">
     <h1>Selecciona un pokemon</h1>
     <div className = "col-5 col-sm-3 col-lg-2 mx-auto">
        <select
         value={pokeSel}
         className = "form-select text-center"
         onChange={(e) => setPokesel(e.target.value)}
         >
             <option value="" disabled>Pokemon</option>
                {pokemon.map((elem, i) => 
                (<option kei={i} value ={elem.name}>
                    {elem.name}
                </option>))}
        </select>
        <Button onClick={irPokemon} variant ="primary" className = "mt-3">Ver detalle</Button>
     </div>
 </div>
 </>
 );
}