import {getNewState} from '../../utils';
import {DISPLAY_FILMS, SAVE_FILMS} from '../actionTypes';

const initialState = {
  films: [],
  loading: false,
};

export default (state = initialState, action) => {
  const {payload: list} = action;
  switch (action.type) {
    case DISPLAY_FILMS.request():
      return getNewState(state, {
        ...state,
        loading: true,
      });

    case DISPLAY_FILMS.success():
      return getNewState(state, {
        films: list,
        loading: false,
      });

    case DISPLAY_FILMS.error():
      return getNewState(state, {
        ...state,
        loading: false,
      });
    case SAVE_FILMS.request():
      return getNewState(state, {
        ...state,
        loading: true,
      });

    case SAVE_FILMS.success():
      return getNewState(state, {
        films: list,
        loading: false,
      });

    case SAVE_FILMS.error():
      return getNewState(state, {
        ...state,
        loading: false,
      });

    default:
      return state
  }
};
