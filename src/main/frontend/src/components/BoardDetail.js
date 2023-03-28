import React, {useEffect, useState} from 'react';
import Parser from 'html-react-parser';
import axios from "axios";
import {Button, Space, Dropdown} from "antd";
import {Link, useNavigate} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Comment from './Comment';
import {BsBookmark, BsFillBookmarkFill, BsHeart, BsHeartFill} from "react-icons/bs";
import Swal from "sweetalert2";

const BoardDetail = () => {
    const navigate = useNavigate();

    // 파라미터를 decoding 해줌
    let str = decodeURI(window.location.search);

    const params = new URLSearchParams(str);
    const idxDetail = { idx: params.get("idx") };
    const idx = idxDetail.idx

    const [viewDetail, setViewDetail] = useState([]);
    const [contents, setContents] = useState('');

    // 작성자 닉네임을 저장하는 변수
    const [writerNick, setWriterNick] = useState('');

    // 로그인 된 유저 닉네임을 저장
    let loginNick = JSON.parse(sessionStorage.getItem("user_info")).user_nick

    const viewList = () => {
        navigate('/BoardWrite')
    }

    useEffect(() => {
        freeBoardView();
    }, []);

    const freeBoardView = () => {
        axios
            .post('/board/free/viewdetail', { idx: idx })
            .then((res) => {
                setViewDetail(res.data);
                setContents(res.data[0].board_contents)
                setWriterNick(res.data[0].user_nick);
            })
            .catch((err) => console.log(err));
    };

    // 댓글 감지 함수
    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    // 작성자 닉네임과 내 닉네임을 비교함
    const showChat = (e) => {
        if (loginNick === writerNick) {
            Swal.fire({
                icon: 'warning',
                title: '',
                text: '나와의 채팅은 불가능합니다.',
            })
            e.preventDefault();
        }else {
            // 새로운 채팅방을 만드는 함수
            axios.post('/socket/chat/newchat', {
                board_idx: idx,
                user_nick1: loginNick,
                user_nick2: writerNick
            }).then((res)=>{
                console.log(res.config.data)
                console.log(res.data)
            }).catch((err)=>console.log(err));
        }
    };

    const delMyBoard = () => {
        Swal.fire({
            title: '게시글을 삭제하시겠습니까?',
            text: "삭제된 게시글은 복구할 수 없습니다.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/board/free/delete', {
                    board_idx : viewDetail[0].board_idx
                }).then((res)=>{
                    console.log(res.config.data);
                    Swal.fire(
                        'Deleted!',
                        '삭제되었습니다.',
                        'success'
                    )
                    navigate('/board');
                }).catch((err)=>console.log(err));
            }
        })
    }

    const editMyBoard = () => {
        navigate("/board/edit");
    }

    const items = [
        {
            key: '1',
            label: (
                <Link to='/Profile'>
                    프로필 보기
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to='/Chat' onClick={showChat}>
                    1:1 채팅
                </Link>
            ),
        },
    ];

    return (
        <div className='boardViewContainer'>
            <div className='boardView'>
                <Button onClick={viewList} style={{width: "fit-content"}}>목록</Button>
                <hr/>
                <p style={{marginBottom: "0px"}}>{viewDetail[0] && viewDetail[0].board_cate}</p>
                <div className='boardTitle'>
                    <h2>{viewDetail[0] && viewDetail[0].board_title}</h2>
                </div>
                <div className='boardWriter'>
                    <Space direction="vertical">
                        <Space wrap>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottomLeft"
                            >
                                <strong>{viewDetail[0] && viewDetail[0].user_nick}</strong>
                            </Dropdown>
                        </Space>
                    </Space>
                    <span style={{marginLeft: "15px"}}>작성일 {viewDetail[0] && viewDetail[0].board_date}</span>
                    <span style={{marginLeft: "15px"}}>조회수 {viewDetail[0] && viewDetail[0].board_cnt}</span>
                    {loginNick == writerNick ? <Button onClick={editMyBoard}>수정</Button> : <div style={{ display : "none"}}></div>}
                    {loginNick == writerNick ? <Button onClick={delMyBoard}>삭제</Button> : <div style={{ display : "none"}}></div>}
                </div>
                <div className='boardContents'>
                    {Parser(contents)}
                </div>
                <hr/>
                <div className='commentBox'>
                    <Button>댓글</Button>
                    <BsBookmark/>
                    <BsFillBookmarkFill/>
                    <BsHeart/>
                    <BsHeartFill/> {viewDetail[0] && viewDetail[0].board_like}
                    <div className='commStackArea'>
                        <Comment/>
                    </div>
                    <TextArea
                        showCount
                        maxLength={100}
                        style={{
                            height: 120,
                            resize: 'none',
                            marginTop: '15px',
                            marginBottom: '20px'
                        }}
                        onChange={onChange}
                        placeholder="댓글을 입력해주세요."
                    />
                    <Button>등록</Button>
                </div>
            </div>
        </div>
    );
};

export default BoardDetail;