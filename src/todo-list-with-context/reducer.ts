import { produce } from "immer";
import { Action, Todo } from "./type";

const todoReducer = produce((draft: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      draft.push(action.payload);
      break;
    case "TOGGLE_TODO":
      const selectedItem = draft.find(todo => todo.id === action.payload);
      if (selectedItem) {
        selectedItem.completed = !selectedItem.completed;
      }
      break;
    case "DELETE_TODO":
      draft.splice(draft.findIndex(todo => todo.id === action.payload), 1);
      break;
    case "DELETE_ALL_COMPLETED_TODOS":
      return draft.filter(todo => !todo.completed);
    default:
      return draft;
  }
});

const visibilityFilterReducer = (state: string, action: Action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export { todoReducer, visibilityFilterReducer };
