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
