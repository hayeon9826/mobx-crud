// interface 타입 정의 (선언적 확장 가능)

import { AxiosResponse } from 'axios';

export interface Post {
  id?: number;
  user: string;
  title: string;
  body: string;
  date: string;
}

export interface Todo {
  id?: number;
  title: string;
  finished: boolean;
}

export interface ToggleTodo {
  id: number;
  finished: boolean;
}

export interface Form {
  id?: number;
  user: string;
  title: string;
  body: string;
  date: string;
}

export interface updatePostProps {
  id: number;
  post: Post;
}

export interface buttonProps {
  buttonText: string;
}

export interface PostStoreType {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
  load(): void;
  getPosts(): AxiosResponse;
  addPost(post: Post): AxiosResponse;
  getPostsSuccess({ posts }: { posts: Post[] }): void;
  getPostsFail({ error }: { error: string }): void;
  addPostSuccess({ posts }: { posts: Post[] }): void;
  addPostFail({ error }: { error: string }): void;
}

export interface TodoStoreType {
  todos: Todo[];
  pendingRequests: number;
  completedTodosCount: number;
  report: string;
  addTodo(title: string): void;
}

export interface RootStoreType {
  // postStore?: PostStoreType;
  todoStore?: TodoStoreType;
}
