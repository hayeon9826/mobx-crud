import { makeObservable, observable, action, flow } from 'mobx';
import { Todo, TodoStoreType } from 'src/interface';
import * as API from '../lib/api';
import { AxiosResponse } from 'axios';

export class TodoStore implements TodoStoreType {
  rootStore;
  todos: Todo[] = [];
  finished: boolean = false;
  id: number = 0;
  title: string = '';
  error: string | unknown = '';

  constructor(root: any) {
    makeObservable(this, {
      id: observable,
      todos: observable,
      finished: observable,
      error: observable,
      title: observable,
      addTodo: flow,
      removeTodo: flow,
      toggle: flow,
      getTodos: flow,
      updateError: action
    });
    this.rootStore = root;
    this.todos = [];
    this.title = '';
    this.error = '';
    this.id = 0;
    this.finished = false;
  }

  *getTodos() {
    try {
      const response: AxiosResponse = yield API.getTodos();
      const todo = response.data;
      this.todos = todo;
    } catch (e) {
      console.log(e);
      this.updateError({ error: '할일 목록을 가져올 수 없습니다. 다시 시도해주세요.' });
    }
  }

  *addTodo(title: string) {
    try {
      yield API.createTodo({ title: title, finished: false });
      this.getTodos();
    } catch (e) {
      console.log(e);
      this.updateError({ error: '할일을 생성할 수 없습니다. 다시 시도해주세요.' });
    }
  }

  *removeTodo(id: number) {
    try {
      yield API.deleteTodo(id);
      this.getTodos();
    } catch (e) {
      console.log(e);
      this.updateError({ error: '할일을 삭제할 수 없습니다. 다시 시도해주세요.' });
    }
  }

  *toggle(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        const toggleAsync = async () => {
          try {
            const res: AxiosResponse = await API.toggleTodo({
              id: id,
              finished: !todo.finished,
              title: todo.title
            });
            this.getTodos();
          } catch (e) {
            console.log(e);
            this.updateError({ error: '상태를 수정할 수 없습니다. 다시 시도해주세요.' });
          }
        };
        toggleAsync();
      }
      return todo;
    });
  }

  updateError({ error }: { error: string }) {
    this.error = error;
  }
}
