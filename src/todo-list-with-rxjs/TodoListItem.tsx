import React, { useCallback, useContext } from "react";
import { Todo } from "./type";
import TodoContext from "./TodoContext";

interface Props {
  todo: Todo;
  index: number;
}

function TodoListItem(props: Props) {
  const { removeTodo, toggleTodoState } = useContext(TodoContext);
  const handleClick = useCallback(() => {
    removeTodo && removeTodo(props.todo.id);
  }, [props.todo.id, removeTodo]);

  const handleToggleState = useCallback(
    index => {
      toggleTodoState && toggleTodoState(index);
    },
    [toggleTodoState]
  );

  return (
    <div style={{ display: "flex" }}>
      <li
        style={{
          textDecoration: props.todo.completed ? "line-through" : "none"
        }}
        onClick={() => handleToggleState(props.index)}
      >
        {props.todo.text}
      </li>
      <button
        style={{ padding: 2, height: 32, marginLeft: 8 }}
        onClick={handleClick}
      >
        删除
      </button>
    </div>
  );
}

export default TodoListItem;
