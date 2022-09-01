import React from "react";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { removeTodo, markTodoAsCompleted } from "./action";

import "./TodoList.css";

function TodoList({ todos = [], onRemovePressed, onCompletedPressed }) {
  return (
    <div className="list-wrapper">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
