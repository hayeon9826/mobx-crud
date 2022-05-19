import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { setupListeners } from '@reduxjs/toolkit/query';
import posts from './slices/post';
import form from './slices/form';
import rootSaga from './sagas/saga';
import { getPostApi } from './lib/api';

const sagaMiddleware = createSagaMiddleware();
// store 생성 및 리듀서 등록
export const store = configureStore({
  reducer: {
    posts,
    form,
    // getPostApi top-level slice에서 생성된 리듀서를 추가
    [getPostApi.reducerPath]: getPostApi.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  // 캐싱, 요청 취소, 폴링 등등 유용한 rtk-query의 기능들을 위한 api 미들웨어 추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getPostApi.middleware, sagaMiddleware)
});
sagaMiddleware.run(rootSaga);
// 옵셔널, refetchOnFocus/refetchOnReconnect 기능을 위해 필요함
// setupListeners 문서를 참고 - 커스텀을 위한 옵셔널 콜백을 2번째 인자로 받음
setupListeners(store.dispatch);

// rootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch 타입 정의
export type AppDispatch = typeof store.dispatch;
