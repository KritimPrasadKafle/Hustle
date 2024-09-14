import React from "react";
import './TodoItem.css';  // Importing CSS

const TodoItem = ({ task, index, toggleTodoCompletion }) => {
  return (
    <li
      className={`todo-item ${task.completed ? "completed" : ""}`}
      onClick={() => toggleTodoCompletion(index)}
    >
      {task.text}
    </li>
  );
};

export default TodoItem;
