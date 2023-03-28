import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const BoardView = () => {
    const { b_idx } = useParams();

    const [data, setData] = useState(null);
    const [bidx, setBidx] = useState(null);

    useEffect(() => {
        setBidx(b_idx);
        const fetchData = async () => {
            const result = await axios.get(`/board/view/${b_idx}`);
            setData(result.data);
        };

        fetchData();
    }, [b_idx]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>제목</h1>
            <p>내용</p>
        </div>
    );
};

export default BoardView;
