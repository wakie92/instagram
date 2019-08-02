import { handleActions , createAction } from 'redux-actions'
import { produce } from 'immer';

const GET_LIKED_ID = 'like_reply/GET_LIKED_ID';
const UPDATE_REPLY = 'like_reply/UPDATE_REPLY';

export const getLikedId = createAction(GET_LIKED_ID);
export const updateReply = createAction(UPDATE_REPLY);

const initialState = {
  idLike : null,
  reply : null,
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

}, initialState)

export default Like_Reply