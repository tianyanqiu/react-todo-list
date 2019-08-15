import createTodoContext from "./createTodoContext";
import { useMemo, useEffect, useState } from "react";
import { Todo } from "../todo-list-with-context/type";

export default function useTodoState() {
  const context = useMemo(
    () => ({ ...createTodoContext(), todos: [], visibilityFilter: "All" }),
    []
  );

  const [todos, setTodos] = useState<Todo[]>([]);
  const [visibilityFilter, setVisibilityFilter] = useState("All");

  useEffect(() => {
    const subscription = context.state$.subscribe(valueState => {
      const { todos, visibilityFilter } = valueState;
      setTodos(todos);
      setVisibilityFilter(visibilityFilter);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [context.state$]);

  const newContext = useMemo(() => ({ ...context, todos, visibilityFilter }), [
    context,
    todos,
    visibilityFilter
  ]);

  return newContext;
}
