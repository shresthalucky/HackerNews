import { itemUrl } from '../api/endpoints';
import { handleError } from '../api/helpers';

export const SET_COMMENT = 'SET_COMMENT';

export const setComment = (comment) => ({
  type: SET_COMMENT,
  payload: comment,
});

export const fetchComment = (id) => {
  return (dispatch) => {
    return fetch(itemUrl(id))
      .then(handleError)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setComment(data));
      });
  };
};
