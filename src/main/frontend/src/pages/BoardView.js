import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const BoardView = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [b_idx, setB_idx] = useState(null);

    useEffect(() => {
        setB_idx(id);
        const fetchData = async () => {
            const result = await axios.get(`/board/view/${id}`);
            setData(result.data);
        };

        fetchData();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const toEdit = (id) => {
        navigate(`/board/edit/${id}`);
    }
    const toDelete = () => {
        axios.post("/board/delete",{
            b_idx:b_idx,
        },{
            params: {
                b_idx:b_idx,
            }
        }).then((res)=>{
            if(res.data=="success"){
                navigate("/board/list");
            }else{
                alert(res.data);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            <h3>{data[0].board_idx}번째 게시글입니다.</h3>
            <h1>{data[0].board_title}</h1>
            <p>{data[0].board_content}</p>
            <button onClick={()=>toEdit(data[0].board_idx)}>수정</button>
            <button onClick={toDelete}>삭제</button>
        </div>
    );
};

export default BoardView;
