import React from 'react';
import '../styles/chat.css'
import {Button} from "antd";
import {MessageOutlined} from "@ant-design/icons";

const Chat = () => {
    return (
        <div>
            <div className="chat-container">
                <aside>
                    <header>
                        <span>💬채팅</span>
                    </header>
                    <ul>
                        톡방이름
                    </ul>
                </aside>
                <main>
                    <div className='noChat' style={{display: "flex", alignItems:"center", justifyContent:"center", color:"white", height: "inherit"}}><MessageOutlined style={{fontSize: '200px'}} /></div>
                    <div className='mainContainer'>
                        <header>
                            <div>
                                <h2> 님과의 채팅입니다.</h2>
                                <h3>제목</h3>
                            </div>
                            <Button>나가기</Button>
                        </header>
                        <ul id="chat">
                            채팅 내용
                        </ul>
                        <footer>
                            <textarea id="msg" placeholder="메시지를 입력하세요."></textarea>
                            <Button>SEND</Button>
                        </footer>
                    </div>
                </main>
            </div>

        </div>
    )
}
export default Chat