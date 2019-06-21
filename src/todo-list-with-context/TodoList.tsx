import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { Todo } from "./type";
import ReduxContext from "./ReduxContext";

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
  const { todos, visibilityFilter } = useContext(ReduxContext);
  const _todos = getVisibleTodos(todos, visibilityFilter);

  return (
    <>
      <h2>待办事项清单</h2>
      <ul>
        {_todos.map((todo: Todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
