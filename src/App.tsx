import React from "react";
import { createStore } from "redux";
import { Router } from "react-router";
import { Route, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import todoApp from "./reducers/todoApp";
import { Provider } from "react-redux";
import TodoListPage from "./redux-todo-list/TodoListPage";
import TodoList from "./todo-list-with-context/TodoListPage";

const store = createStore(todoApp);
const history = createHistory();

function TodoListWithRedux() {
  return (
    <Provider store={store}>
      <TodoListPage />
    </Provider>
  );
}

function App() {
  return (
    <Router history={history}>
      <ul>
        <li>
          <Link to="/todo-list-redux">使用redux的待办列表</Link>
        </li>
        <li>
          <Link to="/todo-list-with-context">
            使用context+useReducer+immer的待办列表
          </Link>
        </li>
      </ul>
      <div className="container">
        <Route path="/todo-list-redux" component={TodoListWithRedux} />
        <Route path="/todo-list-with-context" component={TodoList} />
      </div>
    </Router>
  );
}

export default App;
