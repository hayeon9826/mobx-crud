import { NumberStore } from './NumberStore';
import { TodoStore } from './TodoStore';
import { PostStore } from './PostStore';
import { RootStoreType, NumberStoreType, PostStoreType, TodoStoreType } from 'src/interface';

export class RootStore implements RootStoreType {
  numberStore: NumberStoreType;
  postStore: PostStoreType;
  todoStore: TodoStoreType;

  constructor() {
    this.numberStore = new NumberStore(this);
    this.postStore = new PostStore(this);
    this.todoStore = new TodoStore(this);
  }
}
