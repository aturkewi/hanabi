import React, { Component } from 'react';

class Card extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      hideOptions: true
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    console.log(this.state)
    this.setState({hideOptions: !this.state.hideOptions})
  }
  
  render(){
    let buttons = null;
    if(this.props.currentPlayer){
      buttons = ( <div>
        <button hidden={this.state.hideOptions}>Discard</button>
        <button hidden={this.state.hideOptions}>Play</button>
      </div>)
    }else{
      buttons = ( <div>
        <button hidden={this.state.hideOptions}>Give Clue</button>
      </div>)
    }
    return (  
      <div key={this.props.i} onClick={this.handleClick}>
        {`${this.props.card.color} ${this.props.card.number}`}
        {buttons}
      </div>
    )
  }
}

module.exports = Card;