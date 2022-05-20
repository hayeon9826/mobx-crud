// import { PostStore } from './PostStore';
import { todoStore } from './TodoStore';

import { TodoStoreType, PostStoreType, RootStoreType, Todo } from '../interface';

export class RootStore implements RootStoreType {
  todoStore: TodoStoreType;
  //   postStore: PostStoreType;

  constructor() {
    this.todoStore = todoStore;
    // this.postStore = new PostStore(this);
  }
}
