import React, {useEffect, useRef, useState} from 'react';
import {Button} from "antd";
import {MessageOutlined} from "@ant-design/icons";
import styled from "styled-components";
import axios from "axios";

const ChatContainer = styled.div`
  box-sizing: border-box;
  width: 750px;
  height: 800px;
  background: #ffffff;
  margin: 0 auto;
  font-size: 0;
  border-radius: 5px;
  overflow: hidden;

  aside {
    width: 260px;
    height: 800px;
    background-color: #F7F6FB;
    display: inline-block;
    font-size: 15px;
    vertical-align: top;
  }

  main {
    width: 490px;
    height: 800px;
    display: inline-block;
    font-size: 15px;
    vertical-align: top;
  }

  aside header {
    padding: 30px 20px;
  }

  .nickSearchInput {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 50px 0 20px;
    background-color: whitesmoke;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-repeat: no-repeat;
    background-position: 170px;
    background-size: 40px;
  }

  aside input::placeholder {
    color: #000;
  }

  aside ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    overflow-y: auto;
    height: 690px;
  }

  aside li {
    padding: 10px 0;
  }

  aside li:hover {
    background-color: rgba(104, 217, 214, 0.5);
    cursor:pointer;
  }

  h2,
  h3 {
    margin: 0;
  }

  aside li img {
    border-radius: 50%;
    margin-left: 20px;
    margin-right: 8px;
  }

  aside li div {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 20px;
  }

  aside li h2 {
    font-size: 14px;
    color: #000000;
    font-weight: normal;
    margin-bottom: 5px;
  }

  aside li h3 {
    font-size: 12px;
    color: #7e818a;
    font-weight: normal;
  }

  .status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 7px;
  }

  .green {
    background-color: #58b666;
  }

  .orange {
    background-color: #ff725d;
  }

  .blue{
    background-color:#6fbced;
    margin-right:0;
    margin-left:7px;
  }

  main header{
    height:110px;
    padding:30px 20px 30px 30px;
  }
  main header > *{
    display:inline-block;
    vertical-align:top;
  }
  main header img:first-child{
    border-radius:50%;
  }
  main header img:last-child{
    width:24px;
    margin-top:8px;
  }
  main header div{
    margin-left:10px;
    margin-right:145px;
  }
  main header h2{
    font-size:16px;
    margin-bottom:5px;
  }
  main header h3{
    font-size:14px;
    font-weight:normal;
    color:#7e818a;
  }
  #chat{
    padding-left:0;
    margin:0;
    list-style-type:none;
    overflow-y:scroll;
    height:535px;
    border-top:2px solid #fff;
    border-bottom:2px solid #fff;
  }
  #chat li{
    padding:10px 30px;
  }
  #chat h2,#chat h3{
    display:inline-block;
    font-size:13px;
    font-weight:normal;
  }
  #chat h3{
    color:#bbb;
  }
  #chat .entete{
    margin-bottom:5px;
  }
  #chat .message{
    padding:20px;
    color:#000000;
    line-height:25px;
    max-width:90%;
    display:inline-block;
    text-align:left;
    border-radius:5px;
  }
  #chat .me{
    text-align:right;
  }
  #chat .you .message{
    background-color:rgba(104, 217, 214, 0.5);
  }
  #chat .me .message{
    background-color:rgba(104, 217, 214, 0.5);
  }
  #chat .triangle{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7px 10px 7px;
  }
  #chat .you .triangle{
    border-color: transparent transparent rgb(104, 217, 214) transparent;
    margin-left:15px;
  }
  #chat .me .triangle{
    border-color: transparent transparent rgba(104, 217, 214, 0.5) transparent;
    margin-left:385px;
  }

  main footer{
    height:155px;
    padding:20px 30px 10px 20px;
  }
  main footer textarea {
    resize:none;
    border:none;
    display:block;
    width:100%;
    height:80px;
    border-radius:3px;
    padding:20px;
    font-size:
            13px;
    margin-bottom:13px;
  }
  main footer textarea::placeholder{
    color:#ddd;
  }
  main footer img{
    height:30px;
    cursor:pointer;
  }
  main footer a{
    text-decoration:none;
    text-transform:uppercase;
    font-weight:bold;
    color:#6fbced;
    vertical-align:top;
    margin-left:333px;
    margin-top:5px;
    display:inline-block;
  }
`

const Chat = ({socket}) => {
    // 로그인한 유저의 닉네임을 저장하는 변수
    const nick = JSON.parse(sessionStorage.getItem("user_info")).user_nick;

    // 채팅방 정보를 저장하는 변수
    const [roomInfo, setRoomInfo] = useState([]);

    // display 속성을 저장하는 변수
    const [dpChat, setDpChat] = useState('none');
    const [display, setDisplay] = useState('flex');

    // 로그인한 유저가 참여 중인 채팅방을 불러옴
    useEffect(() => {
        axios.post('/socket/chat/chatlist', {
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
        if (nick === curCtR.user_nick2) {
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
        axios.post('/socket/chat/chatsend', sendMsgInfo)
            .then((res)=>{
                console.log('보내는 값',res.config.data)
                console.log('받아오는 값',res.data)
            }).catch((error)=>(console.log(error)))
        // setMsgList(msgList.concat({ cr_idx: curCtR.cr_idx, board_idx: curCtR.board_idx, talker: nick, msg: ctMsg, sendto: getSendTo() }))
        setCtMsg("")
    }

    const chatExit = () => {
        axios.post('/socket/chat/roomexit', {cr_idx : curCtR.cr_idx})
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

        axios.post('/socket/chat/chatcontent', {cr_idx : curCtR.cr_idx})
            .then((res)=>{
                console.log(res.data);
                setMsgList(res.data)
            }).catch((err)=>console.log(err));

        axios.post('/socket/chat/chatinfo', {
            board_idx : curCtR.board_idx
        }).then((res)=>{
            console.log(res.data)
            setBoardInfo(res.data)
        }).catch((err)=>console.log(err));

        setDisplay('none');
        setDpChat('block');
    }

    //소켓에서 오는 메세지를 받는 함수
    socket.onmessage = function (event) {
        let message = JSON.parse(event.data);
        console.log(message)
        message.talker !== undefined &&
        setMsgList(msgList.concat({ cr_idx: message.cr_idx, board_idx: message.board_idx, talker: message.talker, msg: message.msg, sendto: message.sendto }))
    };

    // 스크롤 고정
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });

    // 엔터쳤을 때 전송
    const enterKey = (e) => {
        e.keyCode === 13 && sendBtn()
    }

    return (
        <ChatContainer>
                <aside>
                    <header>
                        <span style={{fontSize:"20px", fontWeight:"700"}}>💬채팅</span>
                    </header>
                    <ul>
                        {roomInfo && roomInfo.map((item, index) => (
                            <div key={index} onClick={() => curCtRCk(item)}>
                                {item.user_nick2 === nick? (<li><h2>{item.user_nick1}</h2><h3>마지막메시지</h3></li>):<></>}
                            </div>
                        ))}
                    </ul>
                </aside>
                <main>
                    <div className='noChat' style={{display: display, alignItems:"center", justifyContent:"center", color:"white", height: "inherit"}}><MessageOutlined style={{fontSize: '200px'}} /></div>
                    <div className='mainContainer' style={{ display: dpChat }}>
                        <header>
                            <div>
                                <h2>{curCtR.user_nick2 === nick ? curCtR.user_nick1 : curCtR.user_nick2}님과의 채팅입니다.</h2>
                                <h3>[{boardInfo.board_cate}] {boardInfo.board_title}</h3>
                            </div>
                            <Button onClick={chatExit}>나가기</Button>
                        </header>
                        <ul id="chat" ref={scrollRef}>
                            {msgList && msgList.map((item, index) => (
                                <li key={index} className={item.talker == nick ? 'me' : 'you'}>
                                    <div className="entete">
                                        <h2>{item.talker}</h2>
                                    </div>
                                    <div className="triangle"></div>
                                    <div className="message">
                                        {item.msg}
                                    </div>
                                    <h3>시간</h3>
                                </li>
                            ))}
                        </ul>
                        <footer>
                            <textarea id="msg" onChange={sendText} value={ctMsg} onKeyUp={enterKey} placeholder="메시지를 입력하세요."></textarea>
                            <Button onClick={sendBtn}>SEND</Button>
                        </footer>
                    </div>
                </main>
        </ChatContainer>
    )
}
export default Chat