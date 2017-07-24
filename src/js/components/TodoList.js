import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
    <div className="todos">
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
    </div>
)

export default TodoList