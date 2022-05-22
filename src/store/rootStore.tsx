import numberStore from './NumberStore';
import todoStore from './TodoStore';
import postStore from './PostStore';
import { RootStoreType } from 'src/interface';

const rootStore = (): RootStoreType => ({
  numberStore,
  todoStore,
  postStore
});

export default rootStore;
