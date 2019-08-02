import { handleActions , createAction } from 'redux-actions'
import { produce } from 'immer';

const GET_LIKED_ID = 'like_reply/GET_LIKED_ID';

export const getLikedId = createAction(GET_LIKED_ID);

const initialState = {
  idLike : null
}

const Like_Reply = handleActions({
  [GET_LIKED_ID] : (state, action) => {
    return produce(state, draft => {
      draft.idLike = action.payload;
    })
  }
}, initialState)

export default Like_Reply