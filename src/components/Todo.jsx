import React, { useContext } from 'react';
import { TodoContext } from '../App'

function Todo({ todos }) {
    const { handleTodoDelete, handleTodoComplete } = useContext(TodoContext);
    return (
        <div className="todo-container">
            {todos.map(todo => (
                <div key={todo.id} className="todo-content">
                    {
                        todo.completed !== true ? ( <p><span className="red">-</span> { todo.todo }</p> ) : ( <p><span className="green">-</span> { todo.todo }</p> )
                    }
                    <div className="todo-content__buttons">
                        <button onClick={() => handleTodoComplete(todo.id)} className="btn btn-succes">&#10003;</button>
                        <button onClick={() => handleTodoDelete(todo.id)} className="btn btn-danger">&times;</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Todo;