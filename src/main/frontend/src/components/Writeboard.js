import React, {useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Button, Input, Select, Space} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const WriteBoard = () => {
    const navigate = useNavigate();

    // 게시판 이름을 가져오는 location
    const location = useLocation();

    // 게시판의 카테고리를 저장하는 변수
    const [cateVal, setCateVal] = useState('');

    // 게시글의 제목과 내용을 저장하는 변수
    const [post, setPost] = useState({
        nick : JSON.parse(sessionStorage.getItem("user_info")).user_nick,
        category : location.state.category,
        title : '',
        content : '',
        // datetime : ''
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

    const handleChange = (value) => {
        console.log(value);
        setCateVal(value);
    };

    const submitPost = () => {
        axios.post('/board/free', post)
            .then((res)=>{
                console.log('보내는 값',res.config.data)
                console.log('받아오는 값',res.data)
            }).catch((error)=>(console.log(error)))
        navigate('/Board', { state: { ckMenu: '1' }});
    }

    return (
        <div className='boardWriteContainer'>
            <div className='form-wrapper'>
                <Space wrap
                       style={{
                           marginBottom: "1rem",
                       }}>
                    <Select
                        defaultValue={location.state.category}
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: '자유게시판',
                                label: '자유게시판',
                            },
                            {
                                value: '팁게시판',
                                label: '팁게시판',
                            },
                            {
                                value: '거래게시판',
                                label: '거래게시판',
                            },
                        ]}
                    />
                    <Input placeholder="제목"
                           onChange={getValue}
                           name='title'/>
                </Space>
                <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setPost({
                            ...post,
                            content: data
                        })
                        console.log(post)
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
                <Button type="primary"
                        style={{
                            marginTop: "2rem",
                        }}
                        onClick={submitPost}
                >글작성</Button>
            </div>
        </div>
    );
};

export default WriteBoard;