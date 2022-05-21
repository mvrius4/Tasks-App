import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid';
import './css/App.css';

export const TodoContext = React.createContext();
function App() {
  const [todos, setTodos] = useState(sampleTodo);
  const todoContextValues = {
    handleTodoAdd,
    handleTodoDelete,
    handleTodoDeleteAll,
    handleTodoComplete,
    handleTodoCompletedDelete
  };

  
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

  function handleTodoAdd(e, todo) {
    e.preventDefault();
    if(todo === "" || todos.find(t => t.todo === todo)) return;
    let newTodo = {
        id: uuidv4(),
        todo: todo,
        completed: false
    }
    setTodos([...todos, newTodo]);
  }

  function handleTodoDelete(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  function handleTodoDeleteAll() {
    setTodos([]);
  }

  function handleTodoComplete(id) {
    let todosArray = [...todos]
    todosArray.forEach(todo => {
      if(todo.id === id) return todo.completed = true;
      return todo;
    });
    setTodos(todosArray);
  }

  function handleTodoCompletedDelete() {
    setTodos(todos.filter(todo => todo.completed !== true));
  }

  return (
    <TodoContext.Provider value={todoContextValues}>
      <div className="text-container">
        <h1><span className="quote">~</span> Doubt kills more dreams than failure ever will.</h1>
      </div>
      <div className="components">
        <Input />
        <Todos todos={todos}/>
      </div>
    </TodoContext.Provider>
  );
}

const sampleTodo = [
  {
    id: uuidv4(),
    todo: "The possiblity to complete a task.",
    completed: true
  },
  {
    id: uuidv4(),
    todo: "The possiblity to see the number of tasks in the footer of the container, and to clear all the completed ones.",
    completed: true
  }
]

export default App;
