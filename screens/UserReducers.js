import {GET_USER_AIL, GET_USER_REQUEST, GET_USER_SUCCESS} from './UserActions';

const initialState = {fetching: false, data: null, err: null};

export const getUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case GET_USER_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case GET_USER_AIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
