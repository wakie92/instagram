import { handleActions , createAction } from 'redux-actions'
import { produce } from 'immer';

const GET_LIKED_ID = 'like_reply/GET_LIKED_ID';
const UPDATE_REPLY = 'like_reply/UPDATE_REPLY';
const SAVE_FOLLOWS = 'like_reply/SAVE_FOLLOWS';

export const getLikedId = createAction(GET_LIKED_ID);
export const updateReply = createAction(UPDATE_REPLY);
export const saveFollows = createAction(SAVE_FOLLOWS);

const initialState = {
  idLike : null,
  reply : ' ',
  follow : []
}

const Like_Reply = handleActions({
  [GET_LIKED_ID] : (state, action) => {
    return produce(state, draft => {
      draft.idLike = action.payload;
    })
  },

  [UPDATE_REPLY] : (state, action) => {
    return produce(state, draft => {
      draft.reply = action.payload;
    }) 
  },
  
  [SAVE_FOLLOWS] : (state, action) => {
    return produce(state, draft => {
      draft.follow = action.payload;
    })
  }

}, initialState)

export default Like_Reply