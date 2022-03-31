import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePokemon() {
  const [info, setInfo] = useState({
    id: "",
    name: "",
    img: "",
  });

  const { postId } = useParams();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + postId)
      .then((response) => response.json())
      .then((response) => setInfo(response));
  }, [postId]);

  const { id, name, img } = info;

  return (
    <div>
      <li className="pokedex__item">
        <p className="pokedex__subtitle">{id}</p>
        <p className="pokedex__name"> {name}</p>
        <img src={img} alt={name} className="pokedex__image" />
      </li>
    </div>
  );
}
