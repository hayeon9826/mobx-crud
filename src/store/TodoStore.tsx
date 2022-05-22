import { AxiosResponse } from 'axios';
import { observable, runInAction } from 'mobx';
import { Todo, TodoStoreType } from 'src/interface';
import * as API from '../lib/api';

const TodoStore: TodoStoreType = observable({
  // state
  todos: [] as Todo[],
  id: 0,
  title: '',
  finished: false,
  error: null as string | unknown,
  // action
  async getTodos() {
    try {
      const response = await API.getTodos();
      const todo = response.data;
      runInAction(() => {
        this.todos = todo;
      });
    } catch (e) {
      console.log(e);
    }
  },

  async addTodo(title: string) {
    try {
      await API.createTodo({ title: title, finished: false });
      this.getTodos();
    } catch (e) {
      console.log(e);
      this.error = e;
    }
  },

  async removeTodo(id: number) {
    try {
      await API.deleteTodo(id);
      this.getTodos();
    } catch (e) {
      console.log(e);
      this.error = e;
    }
  },

  toggle(id: number) {
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
});

export default TodoStore;
