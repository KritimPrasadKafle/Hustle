import React, { useState } from "react";
import TodoList from "./TodoList";
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodos] = useState("");


  //function to handle adding a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodos("");
    }
  };

  const toggleTodoCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Interactive To-Do List</h1>
      <div className="input-container">
        <input type="text"
          value={newTodo}
          onChange={(e) => setNewTodos(e.target.value)}
          placeholder="Add a new task" />

        <button onClick={addTodo}>Add Task</button>
      </div>
      <TodoList todos={todos} toggleTodoCompletion={toggleTodoCompletion} />


    </div>
  )
}