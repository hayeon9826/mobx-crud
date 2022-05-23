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
      getTodos: flow
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
    }
  }

  *addTodo(title: string) {
    try {
      yield API.createTodo({ title: title, finished: false });
      this.getTodos();
    } catch (e) {
      console.log(e);
      this.error = e;
    }
  }

  *removeTodo(id: number) {
    try {
      yield API.deleteTodo(id);
      this.getTodos();
    } catch (e) {
      console.log(e);
      this.error = e;
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
            this.error = e;
          }
        };
        toggleAsync();
      }
      return todo;
    });
  }
}
