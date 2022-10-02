import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Cardpoke from "../componentes/Cardpoke"



export default function Detalle (){
    const {name} = useParams();
    const[pokemongo, setPokemongo] = useState ({});


    const url = "https://pokeapi.co/api/v2/pokemon";
    
    const getPokemon = async (name) => {
        const res = await fetch(`${url}/${name}`);
        const data = await res.json();
        const src = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((stat) =>({
            name: stat.stat.name,
            base: stat.base_stat

        }));

    const types = data.types.map((elem) => elem.type.name);
    console.log(name, stats, src, types);
     

       setPokemongo({name, stats, src, types});
    };

    useEffect(() => {
        getPokemon(name);}, [name]);

    return(
        <>
     <Cardpoke pokemon={pokemongo}/>
        </>
        );
        
}

