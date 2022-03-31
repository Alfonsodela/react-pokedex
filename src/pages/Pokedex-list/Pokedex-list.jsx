import React, { useState } from "react";
import Post from "../../components/Post/Post";

const PokedexList = () => {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    for (let i = 1; i <= 120; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setPost([{
        name: data.name,
        id: data.id,
        image: data.sprites.front_shiny,
        base_experience: data.base_experience,
      }]);
    }
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
            key={post.id} 
            id={post.id} 
            name={post.name} 
            img={post.img} />
          );
        })}
      </div>
    </div>
  );
};

export default PokedexList;
