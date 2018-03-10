import React from 'react'

class PokemonList extends React.Component {

  renderDetails(selectedPokemon){
    return (
      <div className="pokemon__card-back">
          <h3>Types</h3>
          <ul>
            <li>Base experience: {selectedPokemon.base_experience}</li>
          </ul>
      </div>
    );
  }

  render() {
    let pokemons = this.props.pokemons;
    let imageUrlBase =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    let selectedPokemon = this.props.selectedPokemon || {id:0};

    return(
      <div className="pokemon__card">
        {pokemons.map(pokemon => {
          return <div key={pokemon.id} className="pokemon__card-front">
            <h3 className="pokemon__name">{pokemon.name} - {pokemon.id} </h3>
            <img className="pokemon__image" src={`${imageUrlBase}${pokemon.id}.png`} alt="pokemon" />
            {(pokemon.id === selectedPokemon.id) ?
                this.renderDetails(selectedPokemon):''}
            <button className="info-btn" onClick={() => {this.props.onMoreInfo(pokemon.id)}}>More Info</button>
          </div>
        })}
      </div>
    );
  }
}

export default PokemonList;
