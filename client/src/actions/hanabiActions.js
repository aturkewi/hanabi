export function resetGame(){
  return {type: "RESET_GAME"}
}

const getRandCard = (deck) =>{
  let randNum = Math.floor(Math.random()*deck.length);
  return deck.splice(randNum,1)[0]
}