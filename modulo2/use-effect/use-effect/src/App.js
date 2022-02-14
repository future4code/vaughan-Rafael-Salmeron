import { useEffect, useState } from "react";
import "./index.css";
import PokemonTry from "./components/PokeCard/PokemonTry";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";



function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState();
  // método que roda após a montagem do componente
  
  
  const getAllpokemons = async () => {
    await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20")
    // const data = await res.json()
    .then((res) => {
      setAllPokemons(res.data.results)
      console.log(res.data.results)
    })
    .catch((err) => {
      console.log(err.message)
    })
    

    // function createPokemonObject (result) {
    //   result.forEach( async (pokemon) => {
    //     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    //     const data = await res.json()

    //     setAllPokemons(currentList => [...currentList, data])
        
    //   })
    // }
    // createPokemonObject(data.result)
    // await console.log(data.result)
  }
  
  useEffect(() => {
    getAllpokemons()
  }, [])

    return (
      <div className="App">
        <h1>Pokemons</h1>
        <div>
          <div className="grid">
            { allPokemons.map((pokemon, index) => 
              <PokeCard
                pokemon={pokemon.name}
              />
              // <li>
              //   {allPokemons}
              // </li>
              // <PokemonTry
              // id={pokemon.id}
              // name={pokemon.name}
              // image={pokemon.sprites.other.dream_world.front_default}
              // type={pokemon.types[0].type.name}
              // key={index}
              // />
              )}
              <button>Load More</button>
          </div>
        </div>

      </div>
    );
}

export default App


