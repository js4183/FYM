import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BoardList = () => {
    const [page, setPage] = useState(1); // 현재 페이지 번호
    const [list, setList] = useState([]); // 게시물 목록
    const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수

    useEffect(() => {
        axios.get(`/board/list?page=${page}`)
            .then(response => {
                setList(response.data.list);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => {
                console.error(error);
            });
    }, [page]);

    const handlePageChange = newPage => {
        setPage(newPage);
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>내용</th>
                </tr>
                </thead>
                <tbody>
                {list.map(item => (
                    <tr key={item.board_idx}>
                        <td>{item.board_idx}</td>
                        <td>{item.board_title}</td>
                        <td>{item.board_content}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BoardList;