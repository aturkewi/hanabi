export function resetGame(){
  return {type: "RESET_GAME"}
}

export function addPlayer(playerName){  
  return {type: "ADD_PLAYER", playerName}
}

export function startGame(originalPlayers, originalDeck){
  const deck = [...originalDeck];
  let cardCount = undefined;
  if (originalPlayers.length > 1 && originalPlayers.length < 4){
    cardCount = 5;
  }else if (originalPlayers.length >= 4 && originalPlayers.length <= 5) {
    cardCount = 4;
  }
  const players = originalPlayers.map(p => {
    const hand = [];
    for(let i=0; i < cardCount; i++ ){
      hand.push(getRandCard(deck));
    }
    return Object.assign({}, p, { hand });
  });
  return {type: "START_GAME", players, deck}
}

const getRandCard = (deck) =>{
  let randNum = Math.floor(Math.random()*deck.length);
  return deck.splice(randNum,1)[0]
}