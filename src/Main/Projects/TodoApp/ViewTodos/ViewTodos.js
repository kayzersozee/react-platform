import React from 'react'
import Todo from './Todo/Todo'

function ViewTodos() {
    return (
        <>
           <h4>this is your list of todos!</h4> 
        <ul>
            <Todo /> {/* Prints a list of Li */}
        </ul>
           
        </>
    )
}

export default ViewTodos
