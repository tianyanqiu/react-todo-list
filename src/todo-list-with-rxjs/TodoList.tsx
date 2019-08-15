import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { Todo } from "./type";
import TodoContext from "./TodoContext";

const getVisibleTodos = (todos: Todo[], filter: string) => {
  return todos.filter(todo => {
    switch (filter) {
      case "All":
        return true;
      case "Completed":
        return todo.completed;
      case "Todo":
        return !todo.completed;
      default:
        return true;
    }
  });
};

function TodoList() {
  const { todos, visibilityFilter } = useContext(TodoContext);
  const _todos = getVisibleTodos(todos, visibilityFilter);

  return (
    <>
      <h2>待办事项清单</h2>
      <ul>
        {_todos.map((todo: Todo, index) => (
          <TodoListItem index={index} key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
