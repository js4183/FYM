package com.example.FYM.Service;

import com.example.FYM.Mapper.ChatMapper;
import com.example.FYM.Model.ChatContent;
import com.example.FYM.Model.Chatroom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ChatService {
    @Autowired
    ChatMapper chatMapper;

    public List<Chatroom> ChatRoomList(String user_nick) {
        return chatMapper.ChatRoomList(user_nick);
    }

    public void NewChatRoom(HashMap<String, String> map) {
        chatMapper.NewChatRoom(map);
    }

    public void ChatSendMsg(HashMap<String, String> msg) {
        chatMapper.ChatSendMsg(msg);
    }

    public List<ChatContent> MsgList(String cr_idx) {
        return chatMapper.MsgList(cr_idx);
    }

    public void ExitChat(String cr_idx) {
        chatMapper.ExitChat(cr_idx);
    }

    public Map<String, Object> BoardInfo(String board_idx) {
        return chatMapper.BoardInfo(board_idx);
    }
}
