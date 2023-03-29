import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const BoardView = () => {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [bidx, setBidx] = useState(null);

    useEffect(() => {
        setBidx(id);
        const fetchData = async () => {
            const result = await axios.get(`/board/view/${id}`);
            setData(result.data);
            console.log(data[0].board_title);
        };

        fetchData();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{data[0].board_idx}</h1>
            <h3>{data[0].board_title}</h3>
            <p>{data[0].board_content}</p>
        </div>
    );
};

export default BoardView;
