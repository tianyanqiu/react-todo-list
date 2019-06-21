import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { Todo } from "../reducers/todoReducer";
import { State } from "../reducers/todoApp";

const getVisibleTodos = (todos: Todo[], filter: string) => {
  return todos.filter(todo => {
    switch (filter) {
      case "SHOW_ALL":
        return true;
      case "SHOW_COMPLETED":
        return todo.completed;
      case "SHOW_ACTIVE":
        return !todo.completed;
      default:
        return true;
    }
  });
};

function TodoList() {
  const todos = useSelector((state: State) =>
    getVisibleTodos(state.todos, state.visibilityFilter)
  );

  return (
    <>
      <h2>待办事项清单</h2>
      <ul>
        {todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
