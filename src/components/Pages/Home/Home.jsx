import './Home.css';
import { Layout } from '../../Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="cont-txt">
        <h1>¡Bienvenido al Mundo Pokémon!</h1>
        <p>En nuestra página, te sumergirás en un universo lleno de aventuras, amistad y desafíos.</p>
        <p> Inspirados en la icónica franquicia de Pokémon,
          hemos creado un espacio donde entrenadores de todas las edades pueden conectarse</p>
        <p>Aprender y compartir su pasión por estas increíbles criaturas.</p></div>
      <div className="container">
        <section className="grid">
          <div className="card">
            <img src="https://img.pokemondb.net/artwork/large/pikachu.jpg" alt="Pikachu" />
            <h2>Pikachu</h2>
            <p>El Pokémon eléctrico más famoso. Su ataque característico es el Impactrueno.</p>
          </div>
          <div className="card">
            <img src="https://img.pokemondb.net/artwork/large/charizard.jpg" alt="Charizard" />
            <h2>Charizard</h2>
            <p>Un dragón de fuego con grandes poderes. Puede lanzar llamas que derriten rocas.</p>
          </div>
          <div className="card">
            <img src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg" alt="Bulbasaur" />
            <h2>Bulbasaur</h2>
            <p>Tiene una semilla en su espalda que crece con él. Su ataque favorito es Drenadoras.</p>
          </div>
          <div className="card">
            <img src="https://img.pokemondb.net/artwork/large/squirtle.jpg" alt="Squirtle" />
            <h2>Squirtle</h2>
            <p>Un Pokémon de agua con caparazón duro. Su ataque más característico es Pistola Agua.</p>
          </div>
        </section>
        <h2>Entrenadores</h2>
        <section className="grid">
          <div className="card">
            <img src="https://i.pinimg.com/736x/4f/7c/76/4f7c76e32b345abd11f624a0326d925d.jpg" alt="Ash Ketchum" />
            <h2>Ash Ketchum</h2>
            <p>El entrenador más famoso de Pueblo Paleta. Sueña con convertirse en Maestro Pokémon.</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/c5/10/be/c510bed141a03ef0bf419b6ae3d68f26.jpg" alt="Misty" />
            <h2>Misty</h2>
            <p>Líder de gimnasio especializada en Pokémon de agua. Su Pokémon más fuerte es Starmie.</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/f1/97/dd/f197ddd2490bcfa3d8f233853cf325ee.jpg" alt="Brock" />
            <h2>Brock</h2>
            <p>Amigo de Ash y experto en Pokémon de tipo roca. Fue el líder del Gimnasio Plateado.</p>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/01/45/d6/0145d6e3836fb960f4c0c7271c1d5890.jpg" alt="Gary Oak" />
            <h2>Gary Oak</h2>
            <p>Nieto del Profesor Oak y el rival más fuerte de Ash. Entrenador con gran ambición.</p>
          </div>
        </section>
      </div>


    </Layout>
  )
}

export { Home }


