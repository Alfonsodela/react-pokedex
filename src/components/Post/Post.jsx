import React from "react";
import { Link } from "react-router-dom";

const Post = ({id, name, image}) => {
    return (
        
      
        
          <li className="pokedex__item">
            <p className="pokedex__subtitle">{id}</p>
            <p className="pokedex__name"> {name}</p>
            <img src={image} alt={name} className="pokedex__image" />
          </li>
          
    
    );
}

export default Post;
