import React, { useState } from "react";
import Post from "../../components/Post/Post";

const PokedexList = () => {
  const [post, setPost] = useState([]);

  const pokeArray = [];

  const getPost = async () => {
    for (let i = 1; i <= 10; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const data = await res.json();
    
      pokeArray.push(data)
    }
    setPost(pokeArray)
  };

  return (
    <div className="pokedex">
      <div className="pokedex__title">
        <h1>Pokedex List</h1>

        <button className="pokedex__btn" onClick={getPost}>
          Pokemon List
        </button>
        
        {post.map((item) => {
          return (
            <Post 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            img={item.sprites.front_shiny} />
          );
        })}
      </div>
    </div>
  );
};

export default PokedexList;
