import React, { useContext } from 'react';
import { TodoContext } from '../App';

function TodosFooter({ tasks }) {
    const { handleTodoDeleteAll, handleTodoCompletedDelete } = useContext(TodoContext);
    return (
        <>
            <span className="red normal">{tasks} active tasks</span>
            <button onClick={() => handleTodoCompletedDelete()} className="btn btn-succes">Delete completed tasks</button>
            <button onClick={() => handleTodoDeleteAll()} className="btn btn-danger">Delete all tasks</button>
        </>
    )
}

export default TodosFooter;