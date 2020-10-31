import { combineReducers } from 'redux';

import { storyReducer } from './storyReducer';
import { commentReducer } from './commentReducer';

const reducers = combineReducers({
  story: storyReducer,
  comment: commentReducer,
});

export default reducers;
