import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const add = () => toast.success("You've successfully added a new task!");
  const complete = () => toast.success("You've successfully completed a task!");
  const deleteTask = () => toast.info("You've deleted a task!");
  const deleteAll = () => toast.info("You've deleted all the tasks!");
  const delCompleted = () => toast.info("You've deleted the completed tasks!")
  const existing = () => toast.danger("This task already exist!")
  
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
    if(todo === "" || todos.find(t => t.todo === todo)) { 
      existing(); 
      return;
    }
    let newTodo = {
        id: uuidv4(),
        todo: todo,
        completed: false
    }
    setTodos([...todos, newTodo]);
    add();
  }

  function handleTodoDelete(id) {
    setTodos(todos.filter(t => t.id !== id));
    deleteTask();
  }

  function handleTodoDeleteAll() {
    setTodos([]);
    deleteAll();
  }

  function handleTodoComplete(id) {
    let todosArray = [...todos]
    todosArray.forEach(todo => {
      if(todo.id === id && todo.completed === false) {
        complete(); 
        return todo.completed = true;
      }
      return todo;
    });
    setTodos(todosArray);
  }

  function handleTodoCompletedDelete() {
    setTodos(todos.filter(todo => todo.completed !== true));
    delCompleted();
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
      <ToastContainer
        position="top-center"
        autoClose={2500}
        theme="dark"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
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
