import { combineReducers } from 'redux';
import Post from './post';
import Like_Reply from './like_reply';
export const StoreState  = {
  Post,
  Like_Reply
}

const rootReducer = combineReducers({
  Post,
  Like_Reply
});

export default rootReducer;