import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid';
import './css/App.css';

function App() {
  const [todos, setTodos] = useState(sampleTodo);

  useEffect(() => {
    const todosJSON = localStorage.getItem("todo");
    if(todosJSON != null) setTodos(JSON.parse(todosJSON));
  }, []);
  
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="text-container">
        <h1><span className="quote">~</span> Doubt kills more dreams than failure ever will.</h1>
      </div>
      <div className="components">
        <Input todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
      <footer>
        <p>Created by <a href="https://github.com/mvrius69" target="_blank" rel="noopener">mvrius</a></p>
      </footer>
    </>
  );
}

const sampleTodo = [
  {
    todo: "The possiblity to complete a task.",
    id: uuidv4()
  },
  {
    todo: "The possiblity to see the number of tasks in the footer of the container, and to clear all the completed ones.",
    id: uuidv4()
  }
]

export default App;
