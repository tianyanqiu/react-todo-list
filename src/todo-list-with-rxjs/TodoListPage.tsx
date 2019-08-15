import React from "react";
import AddInput from "./AddInput";
import TodoList from "./TodoList";
import TodoListFooter from "./TodoListFooter";
import useTodoState from "./useTodoState";
import TodoContext from "./TodoContext";

export default function TodoListPage() {
  const context = useTodoState();
  return (
    <TodoContext.Provider value={context}>
      <AddInput />
      <TodoList />
      <TodoListFooter />
    </TodoContext.Provider>
  );
}
