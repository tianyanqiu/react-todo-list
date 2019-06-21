import React, { useReducer } from "react";
import AddInput from "./AddInput";
import TodoList from "./TodoList";
import TodoListFooter from "./TodoListFooter";
import ReduxContext from "./ReduxContext";
import { todoReducer, visibilityFilterReducer } from "./reducer";

export default function TodoListPage() {
  const [todos, todoDispatch] = useReducer(todoReducer, []);
  const [visibilityFilter, filterDispatch] = useReducer(
    visibilityFilterReducer,
    "SHOW_ALL"
  );

  return (
    <ReduxContext.Provider
      value={{ todos, todoDispatch, visibilityFilter, filterDispatch }}
    >
      <AddInput />
      <TodoList />
      <TodoListFooter />
    </ReduxContext.Provider>
  );
}
