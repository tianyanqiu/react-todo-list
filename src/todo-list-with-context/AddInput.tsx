import React, { useState, ChangeEvent, useContext } from "react";
import uuid from "uuid/v4";
import ReduxContext from "./ReduxContext";

export default function AddInput() {
  const [value, setValue] = useState("");

  const { todoDispatch: dispatch } = useContext(ReduxContext);

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: { id: uuid(), text: value } });
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
      <button onClick={handleAdd}>添加</button>
    </div>
  );
}
