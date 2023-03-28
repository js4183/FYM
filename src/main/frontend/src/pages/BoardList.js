import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from "axios";

const BoardListLayout = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 40px;
`;

const BoardList = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get("/board/list").then((res)=>{
            console.log(res.data);
            setList(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <BoardListLayout>
            <table>
                <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>내용</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item) => (
                    <tr key={item.board_idx}>
                        <td>{item.board_idx}</td>
                        <td>{item.board_title}</td>
                        <td>{item.board_content}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </BoardListLayout>
    );
};

export default BoardList;
