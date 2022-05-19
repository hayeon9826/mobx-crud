import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { Post, updatePostProps } from '../interface';

const initialState: Array<Post> = [
  {
    id: 1,
    user: '김핀다',
    title: '후기입니다.',
    body: '비대면으로 쉽게 대출 받을 수 있어서 너무나 기분이 좋았습니다~~~^^',
    date: '2022-05-10'
  },
  {
    id: 2,
    user: '이핀다',
    title: '앱 사용 후기',
    body: '2금융권 대출을 청산하고 1금융권으로 대출을 갈아탔습니다. 2금융권에 한번 대출을 받은 뒤로 1금융권은 아예 한도자체가 없어 최대 18%고금리를 이용했었는데 광주은행 6%대로 여러번의 대환대출 끝에 안착했습니다. 감사합니다.',
    date: '2022-05-10'
  },
  {
    id: 3,
    user: '박핀다',
    title: '추천합니다.',
    body: '급하게 필요한 자금을 빠르고 편리하게 받을 수 있어서 큰 도움이 되었습니다.',
    date: '2022-05-10'
  }
];

// action 타입
const CREATE_POST = 'POST/CREATE_POST';
const UPDATE_POST = 'POST/UPDATE_POST';
const DELETE_POST = 'POST/DELETE_POST';

// createAction: 주어진 액션 타입 문자열로 액션 크리에이터 함수를 생성
// createAction의 첫번째 인자는 type
export const createPost = createAction(CREATE_POST, (data: Post) => ({
  payload: data
}));

export const updatePost = createAction(UPDATE_POST, (data: updatePostProps) => ({
  payload: data
}));

export const deletePost = createAction(DELETE_POST, (data: number) => ({
  payload: data
}));

// slice (initialState, actionTypes, actions, reducer를 하나의 모듈로 묶어서 관리)
export const posts = createSlice({
  name: 'post',
  initialState,
  // reducer 함수 (현재 상태와 액션 객체를 받아, 필요하다면 새로운 상태를 리턴하는 함수)
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.push({ id: state.length + 1, ...action.payload });
      return state;
    },
    editPost: (state, action: PayloadAction<Post>) => {
      state = state.map((post) => (post.id == action.payload.id ? action.payload : post));
      return state;
    },
    removePost: (state, action: PayloadAction<{ id: number }>) => {
      state = state.filter((post) => post.id !== action.payload.id);
      return state;
    },
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state = action.payload;
      return state;
    }
  }
});

export const { addPost, editPost, removePost, setPosts } = posts.actions;
export default posts.reducer;
