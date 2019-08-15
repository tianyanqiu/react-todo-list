import React from "react";
import { TodoStateModel } from "./type";
import { BehaviorSubject } from "rxjs";

const TodoContext = React.createContext<
  TodoStateModel & {
    state$: BehaviorSubject<TodoStateModel>;
  }
>(null as any);

export default TodoContext;
