import React from 'react';


const Form = ({ input, setInput, todos, setTodos }) => {

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {title: input, completed: false} ]);
        setInput("");
    };

    return (
        <form onSubmit = {onFormSubmit}>
            <input type = "text" 
            placeholder = "Enter a Todo" 
            value = {input}
            required
            onChange = {onInputChange} />
            <button type = "submit">
                Add
            </button>
        </form>
    )
}

export default Form;