import gameService from '../services/gameService';

const createGameSuccess = (game) => {
  return {
    type: 'CREATE_GAME_SUCCESS',
    game
  }
}

export const createGame = (title) => {
  return dispatch => {
    return gameService.create(title)
      .then(data => dispatch(createGameSuccess(data)))
      .catch(err => console.log(err));
  }
};

const loadGames = (games) => {
  return {
    type: "ADD_GAMES",
    games
  }
}

export const getGames = () => {
  return dispatch => {
    return gameService.index()
      .then(data => dispatch(loadGames(data)))
      .catch(err => console.log(err));
  }
}