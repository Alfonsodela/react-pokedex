import "./ApiRequest.scss";
import React, { useState, useEffect } from "react";

const Apirequest = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [post, setPost] = useState({
    name: "",
    number: "",
    image: "",
  });

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/ditto`
        // `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await res.json();
      console.log(data);
      setPost(data)
    };
    getPosts();
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
       <div className="pokedex__section">
        <p>{JSON.stringify(post.name)}</p> 
        <p>{JSON.stringify(post.id)}</p> 
        {/* {post.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.sprites.front_shiny} alt=""/>
            </div>
          )
        })} */}
        </div>
      </div>
    </div>
  );
};

export default Apirequest;
