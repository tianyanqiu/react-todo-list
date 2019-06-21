import { produce } from "immer";
import { Action, Todo } from "./type";

const todoReducer = produce((draft: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      draft.push(action.payload);
      break;
    case "TOGGLE_TODO":
      return draft.map(todo =>
        todo.id === action.payload
          ? produce(todo, sta => {
              sta.completed = !sta.completed;
            })
          : todo
      );
    case "DELETE_TODO":
      return draft.filter(todo => todo.id !== action.payload);

    case "DELETE_ALL_COMPLETED_TODOS":
      return draft.filter(todo => !todo.completed);

    default:
      return draft;
  }
});

const visibilityFilterReducer = produce((draft: string, action: Action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.payload;
    default:
      return draft;
  }
});

export { todoReducer, visibilityFilterReducer };
