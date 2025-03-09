import './Apidata.css';
import { Layout } from '../../Layout/Layout';
import React, { useState, useEffect } from 'react';

function Apidata() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchRandomPokemon = async () => {
    setIsLoading(true);
    const randomPokemon = [];


    const promises = [];
    for (let i = 0; i < 8; i++) {
      const randomId = Math.floor(Math.random() * 898) + 1;
      promises.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Error al obtener los datos del Pokémon');
            }
            return response.json();
          })
          .then((data) => {
            const image =
              data.sprites.other?.dream_world.front_default ||
              data.sprites.other?.['official-artwork'].front_default ||
              data.sprites.front_default;

            randomPokemon.push({
              ...data,
              image: image,
            });
          })
          .catch((error) => {
            console.error('Error:', error);
          })
      );
    }


    await Promise.all(promises);

    setPokemonList(randomPokemon);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <Layout>
      <div className="cont-txt">
        <h1>TUS PRIMEROS POKEMON!</h1>
      </div>
      <div className="container">
        <button onClick={fetchRandomPokemon} className="refresh-button">
          Obtener nuevos Pokémon
        </button>

        {isLoading ? (
          <div><img src="https://i.gifer.com/ZKZg.gif" alt="cargango pokemon" /></div>
        ) : (
          <section className="grid">
            {pokemonList.map((pokemon, index) => (
              <div key={index} className="card">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                />
                <h2>{pokemon.name}</h2>
              </div>
            ))}
          </section>
        )}
      </div>
    </Layout>
  );
}

export { Apidata };