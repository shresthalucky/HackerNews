import { handleError } from '../api/helpers';
import { topStoriesUrl, itemUrl } from '../api/endpoints';

export const REQUEST_STORIES = 'REQUEST_STORIES';
export const SET_STORIES = 'SET_STORIES';

export const REQUEST_STORY = 'REQUEST_STORY';
export const SET_STORY = 'SET_STORY';

export const requestStories = () => ({
  type: REQUEST_STORIES,
});

export const setStories = (stories) => ({
  type: SET_STORIES,
  payload: stories,
});

export const fetchStories = () => {
  return (dispatch) => {
    dispatch(requestStories());

    return fetch(topStoriesUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setStories(data));
      });
  };
};

export const requestStory = (id) => ({
  type: REQUEST_STORY,
  payload: id,
});

export const setStory = (story) => ({
  type: SET_STORY,
  payload: story,
});

export const fetchStory = (id) => {
  return (dispatch) => {
    dispatch(requestStory(id));

    return fetch(itemUrl(id))
      .then(handleError)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setStory(data));
      });
  };
};
