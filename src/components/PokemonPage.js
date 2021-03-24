import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [], 
    filteredPokemon: []
  }

  componentDidMount() {
    fetch('https://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => this.setState({pokemon: data, filteredPokemon: data}))
  }

  onSeached = e => {
    let filteredArr
    e.target.value.length ? 
      filteredArr = this.state.pokemon.filter(poke => poke.name.includes(e.target.value)):
      filteredArr = this.state.pokemon
    this.setState({filteredPokemon: filteredArr})
  }

  onFormSubmit = newPoke => {
    
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearched={onSearched}/>
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
