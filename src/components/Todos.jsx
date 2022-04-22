import React from 'react'

function Todos({ todos, setTodos }) {

  function handleTodoDelete(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
    <div className="todo">
      <div className="todo-header">
        <h2>Task Name</h2>
        <h2>Actions</h2>
      </div>
      <div className="todo-container">
        {todos.map(todo => (
          <div className="todo-content">
            <p key={todo.id}><span className="mark">-</span> {todo.todo}</p>
            <button onClick={() => handleTodoDelete(todo.id)} class="btn btn-danger">Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todos;