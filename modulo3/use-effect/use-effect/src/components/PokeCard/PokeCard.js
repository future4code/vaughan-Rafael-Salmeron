import React from "react";
import axios from "axios";
import { Body, Cell, Conteiner, IMG, Row, Table } from "./Style";


export default class PokeCard extends React.Component {
  state = {
    // valor do estado que guarda infos e foto do pokemon
    pokemon: {}
  };

  // método que roda após a montagem do componente
  componentDidMount() {
    this.pegaPokemon(this.props.pokemon);
  }

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  componentDidUpdate(prevProps) {
    // aqui, é feita uma verificação da props anterior com a props atual.
    // Caso a props anterior seja diferente da props atual,
    // a função pegaPokemon é chamada.
    if (prevProps.pokemon !== this.props.pokemon) {
      this.pegaPokemon(this.props.pokemon);
    }
  }

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        this.setState({ pokemon: response.data });
        console.log(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const pokemon = this.state.pokemon;

    return (
      // <Conteiner>
        
      //   {pokemon.sprites && (
      //     <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      //   )}
      //   <Table>
      //   <Body>
      //   <Row><Cell>{pokemon.name}</Cell></Row>
      //   <Row><Cell>{pokemon.weight} Kg</Cell></Row>
      //   {pokemon.types && <Row><Cell>{pokemon.types[0].type.name}</Cell></Row>}
      //   </Body>
      //   </Table>
      // </Conteiner>
    <Conteiner>
        {pokemon.sprites && (
          <IMG src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />)}
          
      <Table>
        <Body>
          <Row>
            <Cell>Name</Cell>
            <Cell>{pokemon.name}</Cell>
          </Row>
          {pokemon.types && 
          <Row>
            <Cell>Type</Cell>
            <Cell>{pokemon.types[0].type.name}</Cell>
          </Row>}
          {/* {pokemon.abilities &&
          <Row>
            <Cell>Ability1</Cell>
            <Cell>{pokemon.abilities[0].ability.name}</Cell>
          </Row>}
          {pokemon.abilities &&
          <Row>
            <Cell>Ability2</Cell>
            <Cell>{pokemon.abilities[1].ability.name}</Cell>
          </Row>} */}
          <Row>
            <Cell>Height</Cell>
            <Cell>{pokemon.height}</Cell>
          </Row>
          <Row>
            <Cell>Weight</Cell>
            <Cell>{pokemon.weight} kg</Cell>
          </Row>
        </Body>
      </Table>
    </Conteiner>
    );
  }
}
