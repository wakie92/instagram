import { combineReducers } from 'redux';
import Post from './post';

export const StoreState  = {
  Post
}

const rootReducer = combineReducers({
  Post
});

export default rootReducer;