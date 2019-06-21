import React from "react";
import AddInput from "./AddInput";
import TodoList from "./TodoList";
import TodoListFooter from "./TodoListFooter";

export default function TodoListPage() {
  return (
    <>
      <AddInput />
      <TodoList />
      <TodoListFooter />
    </>
  );
}
