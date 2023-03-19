import React from "react";
import styled from "styled-components";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ChatHeader = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  font-weight: bold;
`;

const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  padding: 10px;
`;

const ChatInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
`;

const ChatButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`;

function ChatPage(socket) {

    //소켓에서 오는 메세지를 받는 함수
    socket.onmessage = function (event) {
        let message = JSON.parse(event.data);
        console.log(message)
        // message.talker !== undefined &&
        // setMsgList(msgList.concat({ cr_idx: message.cr_idx, board_idx: message.board_idx, talker: message.talker, msg: message.msg, sendto: message.sendto }))
    };

    return (
        <ChatContainer>
            <ChatHeader>
                <h2>Chat Room</h2>
            </ChatHeader>
            <ChatBody>
                <div>User1: Hello, how are you?</div>
                <div>User2: I'm good, thanks for asking.</div>
            </ChatBody>
            <div>
                <ChatInput type="text" placeholder="Type your message here" />
                <ChatButton>Send</ChatButton>
            </div>
        </ChatContainer>
    );
}

export default ChatPage;