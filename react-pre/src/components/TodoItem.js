import React from "react"
import {useState, useRef} from "react";
import styled from 'styled-components';
function TodoItem(props){
    const inputRef = useRef(null); //input창 focus하기
    const [mode, setMode] = useState('Read'); //모드 관리
    const [content_item, setContent] = useState(props.item.text); //입력한 내용 관리

    const input_Change=(e)=>{
        
        setContent(e.target.value)
    }
    const content_fix = (e)=>{ //수정버튼 클릭시 실행하는 함수
        if(mode==='Read'){
            setMode('Fix')
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
        else if(mode==='Fix'){  
            setMode('Read')
            inputRef.current.disabled = true;
        }
        
    }
    const content_delete = (e)=>{ //삭제버튼 클릭시 실행하는 함수
        /*
        props.setTodoList(props.todoList.filter(todoItem=>
           todoItem.id !== 2
        ));
        console.log(props.todoList)
        */

    }

    let content = null;
    content =  <input
        className="fix_input"
        value={content_item}
        ref = {inputRef}
        onChange={input_Change}
        onKeyDown={(e)=>{
            if(e.key === 'Enter'){
                inputRef.current.disabled = true;
                setMode('Read')
            }
        }}
        disabled
        ></input>
    

    return(
        <ItemWrap>
            <div className="ItemBox">
                <div className="item">
                    {content}
                    <button className="box-button"
                    onClick={content_fix}
                    >수정</button>
                    <button className="box-button"
                    onClick={content_delete}
                    >삭제</button>
                </div>
            </div>
                
             
        </ItemWrap>
         
        
    );
}


const ItemWrap = styled.div`
    display:flex;
    justify-content: center;

    .item{
        display: flex;
        justify-content: end;
        text-align: left;
        align-items: center;
        font-size: 25px;
        width: 500px;
        height: 100px;
        border: 1px solid lightblue;
    }

    .read-content , .fix_input{
        margin-right: auto;
        margin-left: 8px;
    }
    
    .box-button{
        margin-right:5px;
    }
    
    .fix_input{
        font-size: 30px;
        border-width: 0;
        background-color: white;
        color: black;
    }

`
export default TodoItem;