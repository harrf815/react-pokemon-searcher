import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }


  render() {
    
    const {name, hp, sprites} = this.props.poke

    return (
      <Card>
        <div>
          <div onClick={() => this.setState({ front: !this.state.front})} className="image">
            {this.state.front ? 
              <img alt="oh no!" src={sprites.front}/> :
              <img alt="oh no!" src={sprites.back}/> 
            }
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
