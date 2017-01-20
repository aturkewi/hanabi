const getRandCard = (deck) =>{
  const randNum = Math.floor(Math.random()*deck.length);
  return deck.splice(randNum,1)[0]
}

const increaseClue = (currentClues) => {
  let clueCounter = currentClues
  if (clueCounter < 8){ clueCounter = currentClues + 1 }
  return clueCounter
}

const removeFromHand = (originalPlayer, discardedCard) => {
  const hand = originalPlayer.hand.filter(card => card.id !== discardedCard.id);
  const player = Object.assign({}, originalPlayer, { hand })
  return player
}

const  drawCard = (originalDeck, originalPlayer) => {
  const deck = [...originalDeck];
  const hand = [...originalPlayer.hand, getRandCard(deck)]
  const player = Object.assign({}, originalPlayer, { hand })
  return { deck, player }
}

const nextTurn = (players, originalCurrentPlayer) => {
  let currentPlayerId;
  if(originalCurrentPlayer === (players.length - 1)){
    currentPlayerId = 0
  }else{
    currentPlayerId = originalCurrentPlayer + 1 
  }
  return currentPlayerId
}

// const moveCard = (originalFromPile, originalToPile=[], card) {
//   const fromPile = originalFromPile.slice().filter(c => c.id !== card.id)
//   const toPile = [...toPile, card]
//   return {fromPile, toPile, card}
// }

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

export function discardCard(originalPlayer, discardedCard, currentClues, originalDeck, players) {
  let player = removeFromHand(originalPlayer, discardedCard)
  const clueCounter = increaseClue(currentClues)
  let playerAndDeck = drawCard(originalDeck, player)
  const deck = playerAndDeck.deck
  player = playerAndDeck.player
  const currentPlayerId = nextTurn(players, originalPlayer.id)
  return {type: "DISCARD_CARD", deck, player, clueCounter, discardedCard, currentPlayerId}
  // return {type: "INCREASE_CLUE", clueCounter}
}

// export function drawCard(oDeck, oPlayer){
//   const deck = [...oDeck];
//   const hand = [...oPlayer.hand, getRandCard(deck)]
//   const player = Object.assign({}, oPlayer, { hand })
//   return {type:"DRAW_CARD", player, deck}
// }

// export function nextTurn(players, oCurrentPlayer){
//   let currentPlayer;
//   (oCurrentPlayer === players.length) ? currentPlayer = 0 : currentPlayer = oCurrentPlayer + 1 
//   return {type:"NEXT_TURN", currentPlayer}
// }