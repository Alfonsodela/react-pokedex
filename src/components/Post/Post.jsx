import React from "react";
import { Link } from "react-router-dom";

const Post = ({ id, name, img }) => {
  return (
    <Link to={`/single-pokemon/${id}`}>
      <li className="pokedex__item">
        <p className="pokedex__subtitle">{id}</p>
        <p className="pokedex__name"> {name}</p>
        <img src={img} alt={name} className="pokedex__image" />
      </li>
    </Link>
  );
};

export default Post;
