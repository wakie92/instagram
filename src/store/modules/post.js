import { handleActions, createAction } from "redux-actions";
import { produce } from "immer";

const GET_POST_CMT = "post/POST_CMT";
const UPDATE_CUR_POST = "post/UPDATE_CUR_POST";
const UPDATE_POST_CMT = "post/UPDATE_POST_CMT";

export const getPostCmt = createAction(GET_POST_CMT);
export const updateCurPost = createAction(UPDATE_CUR_POST);
export const updatePostCmt = createAction(UPDATE_POST_CMT);
const initialState = {
  post_cmt: [],
  cur_post: null
};

const Post = handleActions(
  {
    [GET_POST_CMT]: (state, action) => {
      const { post_cmt } = action.payload;
      return produce(state, draft => {
        if (post_cmt.code) {
          draft.post_cmt = [];
        } else {
          draft.post_cmt = post_cmt.sort((a, b) => {
            return a.pid_post_cmt - b.pid_post_cmt;
          });
        }
        draft.post_cmt = action.payload;
      });
    },
    [UPDATE_CUR_POST]: (state, action) => {
      return produce(state, draft => {
        draft.cur_post = action.payload;
      });
    },
    [UPDATE_POST_CMT]: (state, action) => {
      return produce(state, draft => {
        draft.post_cmt.post_cmt.push(action.payload)
      });
    }
  },
  initialState
);

export default Post;
