import React from 'react';
import TodosFooter from './TodosFooter';
import Todo from './Todo';

function Todos ({ todos }) {
  const tasks = todos.length;
  return (
    <div className="todo">
      <div className="todo-main">
        <div className="todo-header">
          <h2>Task Name</h2>
          <h2>Actions</h2>
        </div>
        <Todo todos={todos}></Todo>
      </div>
      <div className="todo-footer">
        <TodosFooter tasks={tasks}></TodosFooter>
      </div>
    </div>
  )
}

export default Todos;