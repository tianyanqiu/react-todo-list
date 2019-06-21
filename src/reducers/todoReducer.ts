export interface Todo {
  id: string;
  text: string;
  completed?: boolean;
}

export interface AddTodoAction {
  type: "ADD_TODO";
  payload: Todo;
}

export interface ToggleTodoAction {
  type: "TOGGLE_TODO";
  payload: string;
}

export interface SetVisibilityFilterAction {
  type: "SET_VISIBILITY_FILTER";
  payload: string;
}

export interface DeleteTodoAction {
  type: "DELETE_TODO";
  payload: string;
}

export interface DeleteAllCompletedTodosAction {
  type: "DELETE_ALL_COMPLETED_TODOS";
}

export default function todosReducer(
  state: Todo[] = [],
  action:
    | AddTodoAction
    | ToggleTodoAction
    | DeleteTodoAction
    | DeleteAllCompletedTodosAction
) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    case "DELETE_ALL_COMPLETED_TODOS":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}
