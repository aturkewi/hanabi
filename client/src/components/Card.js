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
    this.setState({hideOptions: !this.state.hideOptions})
  }
  
  render(){
    let buttons = null;
    if(this.props.currentPlayer){
      buttons = ( <div>
        <button 
          hidden={this.state.hideOptions}
          onClick={this.props.handleDiscard.bind(null, this.props.card)}>
          Discard
        </button>
        <button 
          hidden={this.state.hideOptions}
          onClick={this.props.handlePlay.bind(null, this.props.card)}>
          Play
        </button>
      </div>)
    }else{
      buttons = ( <div>
        <button hidden={this.state.hideOptions}>Give Clue</button>
      </div>)
    }
    return (  
      <div key={this.props.index} onClick={this.handleClick}>
        <span className="font-light">{`${this.props.card.color} ${this.props.card.number}`}</span>
        {buttons}
      </div>
    )
  }
}

module.exports = Card;