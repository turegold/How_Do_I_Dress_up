import React from "react"
import {useState} from "react";
import styled from 'styled-components';
function TodoItem(props){
    const [mode, setMode] = useState('Read'); //모드 관리
    const [content_item, setContent] = useState(props.item.text); //입력한 내용 관리

    const input_Change=(e)=>{
        console.log("input_Change 실행")
        setContent(e.target.value)
    }
    const content_fix = (e)=>{ //수정버튼 클릭시 실행하는 함수
        setMode('Fix')
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
    if(mode === 'Read'){ 
        content = <h3 className="read-content">{content_item}</h3>
    }
    else if(mode === 'Fix'){
        content = <input 
        className="fix_input"
        value={content_item}
        onChange={input_Change}
        onKeyDown={(e)=>{
            if(e.key === 'Enter'){
                setMode('Read')
            }
        }}
        ></input>
    }
    else if(mode === 'Delete'){
        content = <h1>삭제모드 입니다.</h1>
    }
    
    return(
        <ItemWrap>
            <div className="ItemBox">
                <div className="item">
                    {content}
                    <p>현재 모드: {mode}</p>
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
    
`
export default TodoItem;