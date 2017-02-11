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
