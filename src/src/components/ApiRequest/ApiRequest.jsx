import "./ApiRequest.scss";
import React, { useState, useEffect } from "react";

const Apirequest = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [post, setPost] = useState({
    name: "",
    // number: "",
    image: "",
  });

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/ditto`
      );
      const data = await res.json();
      console.log(data);
      // setPost(data)
      setPost({
        name: pokemonName,
        // number: res.data.id,
        image: res.data.sprites.front_default,
      });
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
        <p>{JSON.stringify(post.name)}</p>
      </div>
    </div>
  );
};

export default Apirequest;
