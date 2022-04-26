import React from 'react';

const TodosList = ({todos, setTodos}) => {
    return (
        <div>
            {todos.map((todo) => (
                <li>
                    <input 
                    type = "text"
                    value = {todo.title}
                    onChange = {(event) => event.preventDefault()}
                    />
                </li>
            ))}
        </div>
    )
}

export default TodosList;
