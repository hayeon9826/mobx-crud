import { observable, action } from 'mobx';
import { Todo } from 'src/interface';
import * as API from '../lib/api';

const TodoStore = observable({
  // state
  todos: [] as Todo[],
  id: Math.random(),
  title: '',
  finished: false,
  // action
  addTodo(title: string) {
    this.todos.push({ title: title, id: this.todos.length + 1, finished: false });
    // API.createTodo({title: title, id: this.todos.length + 1, finished: false})
  },
  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    // API.deleteTodo(id)
  },
  toggle(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        // API.toggleTodo({ id: id, finished: !todo.finished, title: todo.title })
        return {
          ...todo,
          finished: !todo.finished
        };
      }
      return todo;
    });
  }
});

export default TodoStore;
