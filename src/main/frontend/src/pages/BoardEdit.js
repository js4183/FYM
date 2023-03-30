import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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
const BoardEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [post, setPost] = useState({
        board_idx: null,
        board_title : '',
        board_content : '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`/board/posts/${id}`);
            setData(result.data);
            setPost({
                board_idx: id,
                board_title: result.data[0].board_title,
                board_content: result.data[0].board_content,
            });
        };
        fetchData();
    }, [id]);

    const getValue = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value
        })
        console.log(post);
    };

    const editdo = () => {
        axios.post("/board/editdo",post)
            .then((res)=>{
                navigate(`/board/view/${id}`)
            }).catch((err)=>{
            console.log(err);
        })
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <BoardLayout>
            <input placeholder="제목" name="board_title" onChange={getValue} type="text" value={post.board_title} />
            <textarea placeholder="내용" name="board_content" onChange={getValue} value={post.board_content} />
            <button onClick={editdo}>수정완료</button>
        </BoardLayout>
    );
};

export default BoardEdit;
