const getRandCard = (deck) =>{
  const randNum = Math.floor(Math.random()*deck.length);
  return deck.splice(randNum,1)[0]
}

export function resetGame(){
  return {type: "RESET_GAME"}
}

export function addPlayer(playerName){  
  return {type: "ADD_PLAYER", playerName}
}

export function startGame(originalPlayers, originalDeck){
  const deck = [...originalDeck];
  let cardCount;
  if (originalPlayers.length > 1 && originalPlayers.length < 4){
    cardCount = 5;
  }else if (originalPlayers.length >= 4 && originalPlayers.length <= 5) {
    cardCount = 4;
  }
  const players = originalPlayers.map(p => {
    const hand = [];
    for(let i = 0; i < cardCount; i++ ){
      hand.push(getRandCard(deck));
    }
    return Object.assign({}, p, { hand });
  });
  return {type: "START_GAME", players, deck}
}

export function discardCard(oPlayer, discCard){
  console.log("Hit")
  const hand = oPlayer.hand.filter(c => c.id !== discCard.id);
  const player = Object.assign({}, oPlayer, { hand })
  return {type: "DISCARD_CARD", player, discCard}
}

export function increaseClue(currentClues){
  let clueCounter = currentClues
  if (clueCounter < 8){ clueCounter = currentClues + 1 }
  return {type: "INCREASE_CLUE", clueCounter}
}