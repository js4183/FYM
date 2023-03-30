import React, {useState} from 'react';
import styled from 'styled-components'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const BoardLayout = styled.div`
  width:500px;
  margin: 0 auto;
  > input{
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    margin-top: 10px;
  }
  > textarea{
    width: 100%;
    background-color: white;
    margin-top: 10px;
    min-height: 300px;
  }
`;
const BoardWrite = () => {
    const navigate = useNavigate();

    // 게시글의 제목과 내용을 저장하는 변수
    const [post, setPost] = useState({
        title : '',
        content : '',
    })

    // 제목과 본문의 input 변화를 감지하는 함수
    const getValue = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value
        })
        console.log(post);
    };

    const writedo = () => {
        axios.post("/board/writedo",post)
            .then((res)=>{
            console.log(res.data);
            if(res.data==="success"){
                navigate("/board/list");
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <BoardLayout>
            <input placeholder="제목을 입력해주세요." name="title" onChange={getValue} type="text"></input>
            <textarea placeholder="내용" name="content" onChange={getValue}></textarea>
            <button onClick={writedo}>작성</button>
        </BoardLayout>
    );
};

export default BoardWrite;
