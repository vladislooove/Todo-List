import React from 'react'

const Todo = ({ onClick, completed, text }) => (
    <div
        onClick={onClick}
        className={ completed ? 'todo-card--completed todo-card' : 'todo-card' }
    >
        {text}
    </div>
)

export default Todo