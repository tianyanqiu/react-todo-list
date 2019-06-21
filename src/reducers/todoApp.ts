import todosReducer, {
  Todo,
  AddTodoAction,
  ToggleTodoAction,
  DeleteTodoAction,
  DeleteAllCompletedTodosAction
} from "./todoReducer";
import visibilityFilterReducer, {
  SetVisibilityFilterAction
} from "./visibilityFilterReducer";

export interface State {
  todos: Todo[];
  visibilityFilter: string;
}

export default function todoApp(
  state: State = {
    todos: [],
    visibilityFilter: "SHOW_ALL"
  },
  action:
    | AddTodoAction
    | ToggleTodoAction
    | DeleteTodoAction
    | DeleteAllCompletedTodosAction
    | SetVisibilityFilterAction
): State {
  return {
    todos: todosReducer(state.todos, action as any),
    visibilityFilter: visibilityFilterReducer(
      state.visibilityFilter,
      action as any
    )
  };
}
