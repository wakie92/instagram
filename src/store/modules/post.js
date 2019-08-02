import { handleActions , createAction } from 'redux-actions'
import { produce } from 'immer';

const GET_POST_CMT = 'post/POST_CMT'

export const getPostCmt = createAction(GET_POST_CMT);

const initialState = {
  post_cmt : null
}

const Post = handleActions({
  [GET_POST_CMT] : (state, action) => {
    return produce(state, draft => {
      draft.post_cmt = action.payload;
    })
  }
}, initialState)
export default Post;