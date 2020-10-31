import { SET_COMMENT } from '../actions/commentActions';

export const commentReducer = (
  state = {
    comments: {},
  },
  action
) => {
  switch (action.type) {
    case SET_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};
