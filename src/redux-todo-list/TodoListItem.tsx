import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../reducers/todoReducer";

interface Props {
  todo: Todo;
}

function TodoListItem(props: Props) {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch({ type: "TOGGLE_TODO", payload: props.todo.id });
  }, [props.todo.id]);

  const handleDelete = useCallback(() => {
    dispatch({ type: "DELETE_TODO", payload: props.todo.id });
  }, [props.todo.id]);

  return (
    <div style={{ display: "flex" }}>
      <li
        onClick={handleClick}
        style={{
          textDecoration: props.todo.completed ? "line-through" : "none"
        }}
      >
        {props.todo.text}
      </li>
      <button style={{ padding: 2, height: 32,marginLeft:8 }} onClick={handleDelete}>
        删除
      </button>
    </div>
  );
}

export default TodoListItem;
