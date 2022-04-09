import React, { useState, useEffect } from "react";

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [post, setPost] = useState({
    name: "",
    number: "",
    image: "",
  });

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const res = await fetch(
  //       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //     setPost(data)
  //   };
  //   getPosts();
  // }, []);

  const getPosts = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();
    console.log(data);
    setPost({
      name: pokemonName,
      id: data.id,
      image: data.sprites.front_shiny,
      base_experience: data.base_experience,
    });
  };

  const { name, id, image, base_experience } = post;

  return (
    <div className="pokedex">
      <div className="pokedex__title">
        <h1>Pokedex</h1>
      </div>

      <div className="pokedex__filter">
        <input
          type="text"
          className="pokedex__input"
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        />
        <button className="pokedex__btn" onClick={getPosts}>
          Search Pokemon
        </button>
      </div>

      <div className="pokedex__item">
        <p pokedex__subtitle>
          {id}
          <p />
          <p pokedex__name></p> {pokemonName}
        </p>
        <img src={image} alt={name} className="pokedex__image" />
        <p>{base_experience}</p>
      </div>
    </div>
  );
};

export default Pokedex;
