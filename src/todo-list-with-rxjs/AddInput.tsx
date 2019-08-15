import React, { useState, ChangeEvent, useContext } from "react";
import uuid from "uuid/v4";
import TodoContext from "./TodoContext";

export default function AddInput() {
  const [value, setValue] = useState("");

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const { addTodo } = useContext(TodoContext);

  const handleOnclick = () => {
    addTodo && addTodo({ id: uuid(), text: value });
    setValue("");
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        value={value}
        placeholder="请在此处新增待办事项"
        onChange={handleOnchange}
        style={{ width: "80%" }}
      />
      <button onClick={handleOnclick}>添加</button>
    </div>
  );
}
