import {DISPLAY_FILMS} from '../actionTypes';
import {error, request, success} from '../baseActions';

export const getFilms = () => async dispatch => {
  const action = DISPLAY_FILMS;

  dispatch(request(action));
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
    if (response) {
        return dispatch(success(action,response))
    }
    return dispatch(error(action,response))
} catch (error) {}
    return dispatch(error(action,error))
};
export const saveFilms = (data) => async dispatch => {
  const action = DISPLAY_FILMS;

  dispatch(request(action));
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films',data)
      .then(response => response.json())
    if (response) {
        return dispatch(success(action,response))
    }
    return dispatch(error(action,response))
} catch (error) {}
    return dispatch(error(action,error))
};
