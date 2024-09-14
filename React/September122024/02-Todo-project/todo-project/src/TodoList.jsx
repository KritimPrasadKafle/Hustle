import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoCompletion }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          task={todo}
          index={index}
          toggleTodoCompletion={toggleTodoCompletion}
        />
      ))}
    </ul>
  );
};

export default TodoList;
