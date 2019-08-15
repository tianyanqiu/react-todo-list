import React, { useContext, useCallback } from "react";
import TodoContext from "./TodoContext";

export default function TodoListFooter() {
  const { setFilterType, removeAll, visibilityFilter } = useContext(
    TodoContext
  );

  const handleFilterTypeChange = (type: string) => {
    setFilterType && setFilterType(type);
  };

  const getColor = useCallback(
    (type: string) => {
      if (visibilityFilter === type) {
        return "blue";
      }

      return "black";
    },
    [visibilityFilter]
  );

  return (
    <div>
      显示：
      <span
        style={{ color: getColor("All") }}
        onClick={() => handleFilterTypeChange("All")}
      >
        所有
      </span>
      ,
      <span
        style={{ color: getColor("Todo") }}
        onClick={() => handleFilterTypeChange("Todo")}
      >
        未完成
      </span>
      ,
      <span
        style={{ color: getColor("Completed") }}
        onClick={() => handleFilterTypeChange("Completed")}
      >
        已完成
      </span>
      <button
        style={{ height: 32, padding: 0, marginLeft: 8 }}
        onClick={() => {
          removeAll && removeAll();
        }}
      >
        删除所有已完成事项
      </button>
    </div>
  );
}
