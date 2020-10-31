import {
  REQUEST_STORIES,
  SET_STORIES,
  SET_STORY,
} from '../actions/storyActions';

export const storyReducer = (
  state = {
    isFetching: false,
    stories: [],
    storiesDetail: {},
  },
  action
) => {
  switch (action.type) {
    case REQUEST_STORIES:
      return {
        ...state,
        isFetching: true,
      };
    case SET_STORIES:
      return {
        ...state,
        isFetching: false,
        stories: [...action.payload],
      };
    case SET_STORY:
      return {
        ...state,
        storiesDetail: {
          ...state.storiesDetail,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};
