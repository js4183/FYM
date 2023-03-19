import React, { useRef, useState, useEffect } from 'react';
import '../styles/chat.css'
import axios from "axios";
// import {Button} from "antd";
// import {MessageOutlined} from "@ant-design/icons";

const Chat = (socket) => {
    // 로그인한 유저의 닉네임을 저장하는 변수
    const nick = JSON.parse(sessionStorage.getItem("user_info")).user_nick;

    // 채팅방 정보를 저장하는 변수
    const [roomInfo, setRoomInfo] = useState([]);

    // display 속성을 저장하는 변수
    const [dpChat, setDpChat] = useState('none');
    const [display, setDisplay] = useState('flex');

    // 로그인한 유저가 참여 중인 채팅방을 불러옴
    useEffect(() => {
        axios.post('/socket/chat/roomlist', {
            nick : nick
        }).then((res)=>{
            console.log('RoomInfo : ',res.data)
            setRoomInfo(res.data)
        }).catch((error)=>(console.log(error)))
    }, [])

    // 현재 참여중인 채팅방을 저장하는 변수
    const [curCtR, setCurCtR] = useState({})

    // 채팅 메시지를 저장하는 변수
    const [ctMsg, setCtMsg] = useState("")

    // 타이핑 중인 메시지를 확인하는 함수(onChange)
    const sendText = (e) => {
        setCtMsg(e.target.value)
    }

    const getSendTo = () => {
        if (nick == curCtR.user_nick2) {
            return curCtR.user_nick1
        } else {
            return curCtR.user_nick2
        }
    }

    // 메시지에 담아서 보낼 내용을 저장하는 변수
    const sendMsgInfo = {
        cr_idx: curCtR.cr_idx,
        board_idx: curCtR.board_idx,
        talker: nick,
        msg: ctMsg,
        sendto: getSendTo()
    }

    // 전송 버튼 클릭
    const sendBtn = () => {
        if (socket.readyState !== 1) return;
        socket.send(JSON.stringify(sendMsgInfo))

        // DB에 저장하는 axios
        axios.post('/socket/chat/sendmsg', sendMsgInfo)
            .then((res)=>{
                console.log('보내는 값',res.config.data)
                console.log('받아오는 값',res.data)
            }).catch((error)=>(console.log(error)))
        // setMsgList(msgList.concat({ cr_idx: curCtR.cr_idx, board_idx: curCtR.board_idx, talker: nick, msg: ctMsg, sendto: getSendTo() }))
        setCtMsg("")
    }

    const chatExit = () => {
        axios.post('/socket/chat/exit', {cr_idx : curCtR.cr_idx})
            .then((res)=>{
                console.log(res.config.data);
                console.log(res.data);
            }).catch((err)=>console.log(err));

        setDisplay('flex');
        setDpChat('none');
    }

    //메시지 리스트를 저장하는 변수
    const [msgList, setMsgList] = useState([]);

    // 게시글 정보를 저장하는 변수
    const [boardInfo, setBoardInfo] = useState({});

    const curCtRCk = (item) => {
        setCurCtR(item);
        console.log("curCtR에 저장된", curCtR);

        axios.post('/socket/chat/chatting', {cr_idx : curCtR.cr_idx})
            .then((res)=>{
                console.log(res.data);
                setMsgList(res.data)
            }).catch((err)=>console.log(err));

        axios.post('/socket/chat/boardinfo', {
            board_idx : curCtR.board_idx
        }).then((res)=>{
            console.log(res.data)
            setBoardInfo(res.data)
        }).catch((err)=>console.log(err));

        setDisplay('none');
        setDpChat('block');
    }

    //소켓에서 오는 메세지를 받는 함수
    // socket.onmessage = function (event) {
    //     let message = JSON.parse(event.data);
    //     console.log(message)
    //     message.talker !== undefined &&
    //     setMsgList(msgList.concat({ cr_idx: message.cr_idx, board_idx: message.board_idx, talker: message.talker, msg: message.msg, sendto: message.sendto }))
    // };

    // 스크롤 고정
    // const scrollRef = useRef();
    // useEffect(() => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    //     }
    // });

    // 엔터쳤을 때 전송
    const enterKey = (e) => {
        e.keyCode == 13 && sendBtn()
    }

    return (
        <div>

            <div className="chat-container">
                <aside>
                    <header>
                        <input type="text" placeholder="닉네임 검색" className="nickSearchInput"/>
                    </header>
                    <ul>
                        <li>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>
                            <div>
                                <h2>Prénom Nom</h2>
                                <h3>
                                    <span className="status orange"></span>
                                    offline
                                </h3>
                            </div>
                        </li>
                    </ul>
                </aside>
                <main>
                    <header>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>
                        <div>
                            <h2>Chat with Vincent Porter</h2>
                            <h3>already 1902 messages</h3>
                        </div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""/>
                    </header>
                    <ul id="chat">
                        <li className="you">
                            <div className="entete">
                                <span className="status green"></span>
                                <h2>Vincent</h2>
                                <h3>10:12AM, Today</h3>
                            </div>
                            <div className="triangle"></div>
                            <div className="message">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </div>
                        </li>
                        <li className="me">
                            <div className="entete">
                                <h3>10:12AM, Today</h3>
                                <h2>Vincent</h2>
                                <span className="status blue"></span>
                            </div>
                            <div className="triangle"></div>
                            <div className="message">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </div>
                        </li>
                        <li className="me">
                            <div className="entete">
                                <h3>10:12AM, Today</h3>
                                <h2>Vincent</h2>
                                <span className="status blue"></span>
                            </div>
                            <div className="triangle"></div>
                            <div className="message">
                                OK
                            </div>
                        </li>
                        <li className="you">
                            <div className="entete">
                                <span className="status green"></span>
                                <h2>Vincent</h2>
                                <h3>10:12AM, Today</h3>
                            </div>
                            <div className="triangle"></div>
                            <div className="message">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </div>
                        </li>
                        <li className="me">
                            <div className="entete">
                                <h3>10:12AM, Today</h3>
                                <h2>Vincent</h2>
                                <span className="status blue"></span>
                            </div>
                            <div className="triangle"></div>
                            <div className="message">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </div>
                        </li>
                        <li className="me">
                            <div className="entete">
                                <h3>10:12AM, Today</h3>
                                <h2>Vincent</h2>
                                <span className="status blue"></span>
                            </div>
                            <div className="triangle"></div>
                            <div className="message">
                                OK
                            </div>
                        </li>
                    </ul>
                    <footer>
                        <textarea placeholder="Type your message"></textarea>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt=""/>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt=""/>
                        <a href="#">Send</a>
                    </footer>
                </main>
            </div>

        </div>
    )
}
export default Chat