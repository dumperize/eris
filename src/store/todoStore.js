import { observable, decorate, action } from "mobx";

export const ALL = "ALL";
export const COMPLETED = "COMPLETED";
export const UNCOMPLETED = "UNCOMPLETED";

const FILTER_FUNC = {
  [ALL]: () => true,
  [COMPLETED]: item => item.complete,
  [UNCOMPLETED]: item => !item.complete
};

class TodoStore {
  constructor(rootStore, initialState) {
    this.rootStore = rootStore;
    this.filter = ALL;
    this.todos = initialState;
    this.id = Math.max(...this.todos.map(item => item.id), 1) + 1;
  }

  get filteredTodos() {
    return this.todos.filter(FILTER_FUNC[this.filter]);
  }
  changeFilter(value) {
    this.filter = value;
  }

  removeTask(id) {
    this.todos = this.todos.filter(item => item.id !== id);
  }
  completeTask(id) {
    this.todos = this.todos.map(item =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
  }
  addTask(title) {
    this.todos.push({ id: this.id++, title, complete: false });
  }
}

decorate(TodoStore, {
  filter: observable,
  todos: observable,
  removeTask: action,
  completeTask: action,
  addTask: action
});

export default TodoStore;
