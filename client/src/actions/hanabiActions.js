export function resetGame(){
  return {type: "RESET_GAME"}
}

export function addPlayer(playerName){
  return {type: "ADD_PLAYER", playerName}
}

const getRandCard = (deck) =>{
  let randNum = Math.floor(Math.random()*deck.length);
  return deck.splice(randNum,1)[0]
}