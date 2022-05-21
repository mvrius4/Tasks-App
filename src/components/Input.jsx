import React, { useState, useContext } from 'react';
import { TodoContext } from '../App';

function Input({ setTodos, todos }) {
    const [todo, setTodo] = useState("");
    const { handleTodoAdd } = useContext(TodoContext);

    return (
        <form>
            <input onChange={e => setTodo(e.target.value)} type="text" id="todo" placeholder="Enter a new todo" required />
            <button onClick={e => handleTodoAdd(e, todo)} type="submit">Add new todo</button>
        </form>
    );
};

export default Input;