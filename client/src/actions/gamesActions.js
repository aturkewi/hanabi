import gameService from '../services/gameService';

export const createGame = (title) => {
  return dispatch => {
    return gameService.create(title)
      .then((data) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }
};
