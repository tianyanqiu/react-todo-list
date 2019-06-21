import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers/todoApp";

function Tab(props: any) {
  const visibilityFilter = useSelector(
    (state: State) => state.visibilityFilter
  );
  return (
    <span
      style={{
        color: props.filterType === visibilityFilter ? "blue" : "black",
        cursor: "pointer"
      }}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
}

export default function TodoListFooter() {
  const dispatch = useDispatch();

  const handleAllClick = () => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      payload: "SHOW_ALL"
    });
  };

  const handleActiveClick = () => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      payload: "SHOW_ACTIVE"
    });
  };

  const handleCompletedClick = () => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      payload: "SHOW_COMPLETED"
    });
  };

  const handleDeleteAll = () => {
    dispatch({
      type: "DELETE_ALL_COMPLETED_TODOS"
    });
  };

  return (
    <div>
      显示：
      <Tab filterType="SHOW_ALL" onClick={handleAllClick}>
        所有
      </Tab>
      ,
      <Tab filterType="SHOW_ACTIVE" onClick={handleActiveClick}>
        未完成
      </Tab>
      ,
      <Tab filterType="SHOW_COMPLETED" onClick={handleCompletedClick}>
        已完成
      </Tab>
      <button
        style={{ height: 32, padding: 0, marginLeft: 8 }}
        onClick={handleDeleteAll}
      >
        删除所有已完成事项
      </button>
    </div>
  );
}
