import React, { useState } from 'react'
import Form from "./Form.js";
import TodosList from './TodosList.js';

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form
      input = {input}
      setInput = {setInput}
      todos = {todos}
      setTodos = {setTodos}
       />
      <TodosList 
      todos = {todos}
      setTodos = {setTodos}
      />     
    </div>
  );
};

export default App;
