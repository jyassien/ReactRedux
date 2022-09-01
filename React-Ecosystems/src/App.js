import React from "react";
import "./App.css";
import NewTodoForm from "./todos/NewTodoForm";
import TodoList from "./todos/TodoList";

const App = () => (
  <div className="App">
    <h1>Hello, Web!</h1>
    <NewTodoForm />
    <TodoList />
  </div>
);

export default App;
