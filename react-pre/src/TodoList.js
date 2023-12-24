import styled from 'styled-components';
import { useState, useRef } from 'react';
import TodoBoard from './components/TodoBoard'

function TodoList(){
    const [inputValue, setInputValue] = useState('') //입력창 value를 관리하는 state
    const [todoList, setTodoList] = useState([]) //todolist 아이템들을 관리하는 state
    const nextId = useRef(1);

    const input_Change=(e)=>{   //할일 입력값이 바뀔 때 함수
        setInputValue(e.target.value)
    }
    const addItem=(e)=>{ //추가 버튼을 눌렀을 때 함수
        console.log(`${inputValue}추가!`)
        setTodoList([...todoList,{
            id: nextId.current++,
            text: inputValue,
            isChk: false
        }]) //기존에 있는 배열에 새로운 것 하나만 추가
    }
    const enter=(e)=>{
        if(e.key === "Enter"){
            addItem(e);
        }
    }
    const handleChangeDeleteItem = (id)=>{
        setTodoList((state).filter((el)=> el.id !== id));
    }
    

    
    
    
    return(
        <AppWrap>
            <input className="input"
            onChange={input_Change}
            value = {inputValue}
            onKeyDown={enter}
            ></input>
            <button className="button"
            onClick={addItem}
            >추가</button>
            <TodoBoard todoList={todoList} setTodoList={setTodoList}/>
        </AppWrap>
    );
}

const AppWrap = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    
    .input{
        width: 500px;
        height: 32px;
        font-size: 15px;
        border: 0;
        border-radius: 15px;
        outline: none;
        padding-left: 10px;
        background-color: rgb(233,233,233);
    }

    .button{
        width: 80px;
        height: 38px;
        font-size: 14px;
        border-radius: 12px;
        outline:none;
    }
`;

export default TodoList;