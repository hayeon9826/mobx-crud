import { action, autorun, computed, makeObservable, observable } from 'mobx';
import { Todo } from 'src/interface';

export class TodoStore {
  todos: Todo[] = [];
  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      todos: observable,
      pendingRequests: observable,
      completedTodosCount: computed,
      report: computed,
      addTodo: action
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter((todo: Todo) => todo.finished === true).length;
  }

  get report() {
    if (this.todos.length === 0) return '<none>';
    const nextTodo = this.todos.find((todo) => todo.finished === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.title : '<none>'}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(title: string) {
    this.todos.push({
      id: this.todos.length + 1,
      title: title,
      finished: false
    });
  }
}

export const todoStore = new TodoStore();
