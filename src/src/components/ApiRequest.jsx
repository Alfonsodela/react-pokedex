import "./ApiRequest.scss";
import React, { useState, useEffect } from "react";

const Apirequest = () => {

    const [pokemonName, setPokemonName] = useState("");
  const [post, setPost] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      const data = await res.json()
      console.log(data)
      setPost(data)
    }
    getPosts()
  }, []);

  return (
    <div className="pokedex">
      <div className="pokedex__title">
        <h1>Pokedex</h1>
        <input 
          type="text" 
          className="pokedex__input" 
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
          />
        <button 
          className="pokedex__btn"
          // onClick={getPosts}
          >
          Search Pokemon
          </button>
         <p>{JSON.stringify(post.name)}</p> 
      </div>
    </div>
  );
};

export default Apirequest;
