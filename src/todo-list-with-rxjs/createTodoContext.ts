import { BehaviorSubject } from "rxjs";
import { produce } from "immer";
import { TodoStateModel } from "./type";
import { Todo } from "../reducers/todoReducer";

export default function createTodoContext(
  initialState: TodoStateModel = { todos: [], visibilityFilter: "All" }
) {
  const state$ = new BehaviorSubject(initialState);

  /**
   * 添加待办事项
   * @param todo 单条数据
   */
  const addTodo = (todo: Todo) => {
    state$.next(
      produce(state$.value, draft => {
        const idx = draft.todos.findIndex(_ => _.text === todo.text);
        if (idx === -1) {
          draft.todos.push(todo);
        }
        draft.todos.splice(idx, 1, todo);
      })
    );
  };

  /**
   * 删除待办事项
   * @param id 要删除事项的id
   */
  const removeTodo = (id: string) => {
    state$.next(
      produce(state$.value, draft => {
        const idx = draft.todos.findIndex(todo => todo.id === id);

        if (idx !== -1) {
          draft.todos.splice(idx, 1);
        }
      })
    );
  };

  /**
   * 删除所有
   */
  const removeAll = () => {
    state$.next(
      produce(state$.value, draft => {
        draft.todos = [];
      })
    );
  };

  /**
   * 切换事项的完成状态
   * @param idx 索引
   */
  const toggleTodoState = (idx: number) => {
    state$.next(
      produce(state$.value, draft => {
        draft.todos[idx].completed = !draft.todos[idx].completed;
      })
    );
  };

  /**
   * 设置事项的显示条件
   * @param type 现实条件
   */
  const setFilterType = (type: string) => {
    state$.next(
      produce(state$.value, draft => {
        draft.visibilityFilter = type;
      })
    );
  };

  return {
    addTodo,
    removeAll,
    removeTodo,
    toggleTodoState,
    setFilterType,
    state$
  };
}
