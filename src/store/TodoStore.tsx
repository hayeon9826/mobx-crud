import { AxiosResponse } from 'axios';
import { action, flow, makeObservable, observable } from 'mobx';
import { Todo } from 'src/interface';
import * as API from '../lib/api';

const TodoStore = observable({
  // state
  todos: [] as Todo[],
  id: Math.random(),
  title: '',
  finished: false,
  error: null as string | unknown,
  // action
  async getTodos() {
    try {
      const response = await API.getTodos();
      const todo = response.data;
      this.todos = todo;
    } catch (e) {
      console.log(e);
    }
  },

  async addTodo(title: string) {
    try {
      const response = await API.createTodo({ title: title, finished: false });
      console.log(response);
      this.getTodos();
    } catch (e) {
      console.log(e);
      this.error = e;
    }
  },
  async removeTodo(id: number) {
    try {
      const response = await API.deleteTodo(id);
      console.log(response);
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
            const res = await API.toggleTodo({
              id: id,
              finished: !todo.finished,
              title: todo.title
            });
            console.log(res);
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
