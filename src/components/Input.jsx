import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Input({ setTodos, todos }) {
    const [todo, setTodo] = useState("");

    function handleTodoAdd(e) {
        e.preventDefault();
        if(todo === "") return;
        if(todos.find(t => t.todo === todo)) return;
        let newTodo = {
            todo: todo,
            id: uuidv4()
        }
        setTodos([...todos, newTodo]);
    }

    return (
        <form>
            <input onChange={e => setTodo(e.target.value)} type="text" id="todo" placeholder="Enter a new todo" required />
            <button onClick={e => handleTodoAdd(e)} type="submit">Add new todo</button>
        </form>
    );
};

export default Input;