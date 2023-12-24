import React from "react"
import TodoItem from "./TodoItem"
import styled from 'styled-components';

function TodoBoard(props){
    return(
        <div>
            <h1>TodoList</h1>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
        </div>
        
    );
}

export default TodoBoard;