export interface Todo {
  id: string;
  text: string;
  completed?: boolean;
}

export interface State {
  todos: Todo[];
  visibilityFilter: string;
}

export interface Action {
  type: string;
  payload: any;
}

export interface TodoStateModel {
  todos: Todo[];
  visibilityFilter: string;
  addTodo?: (todo: Todo) => void;
  removeTodo?: (id: string) => void;
  removeAll?: () => void;
  toggleTodoState?: (idx: number) => void;
  setFilterType?: (type: string) => void;
}
