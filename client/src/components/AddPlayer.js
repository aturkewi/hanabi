import React, { Component } from 'react';

class AddPlayer extends Component {
  constructor(props){
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event){
    event.preventDefault();
    const playerName = event.target.children[0].value;
    this.props.addPlayer(playerName);
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="playerName" />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    )
  }
}

module.exports = AddPlayer;