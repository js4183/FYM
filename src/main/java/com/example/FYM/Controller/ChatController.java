package com.example.FYM.Controller;


import com.example.FYM.Model.ChatContent;
import com.example.FYM.Model.Chatroom;
import com.example.FYM.Service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/socket/chat")
@RestController
public class ChatController {
    @Autowired
    ChatService chatService;

    @PostMapping("/roomlist")
    public List<Chatroom> ChatRoomList(@RequestBody Map<String, String> data){
        String user_nick = data.get("nick");
        return chatService.ChatRoomList(user_nick);
    }

    @PostMapping("/newchat")
    public void NewChatRoom(@RequestBody Map<String, String> data) {
        HashMap<String, String> map = new HashMap<>();
        map.put("board_idx", data.get("board_idx"));
        map.put("user_nick1", data.get("user_nick1"));
        map.put("user_nick2", data.get("user_nick2"));
        chatService.NewChatRoom(map);
    }

    @PostMapping("/sendmsg")
    public void ChatSendMsg(@RequestBody Map<String, String> data){
        HashMap<String, String> msg = new HashMap<>();
        msg.put("cr_idx", data.get("cr_idx"));
        msg.put("board_idx", data.get("board_idx"));
        msg.put("talker", data.get("talker"));
        msg.put("msg", data.get("msg"));
        chatService.ChatSendMsg(msg);
    }

    @PostMapping("/chatting")
    public List<ChatContent> MsgList(@RequestBody Map<String, String> data) {
        System.out.println("채팅 데이터 : " +data);
        System.out.println("채팅방 index : "+data.get("cr_idx"));
        String cr_idx = data.get("cr_idx");
        return chatService.MsgList(cr_idx);
    }

    @PostMapping("/exit")
    public void ExitChat(@RequestBody Map<String, String> data) {
        System.out.println("채팅방 index : "+data.get("cr_idx"));
        String cr_idx = data.get("cr_idx");
        chatService.ExitChat(cr_idx);
    }

    @PostMapping("/boardinfo")
    public Map<String, Object> BoardInfo(@RequestBody Map<String, String> data) {
        System.out.println("게시글 정보"+data.get("board_idx"));
        String board_idx = data.get("board_idx");
        return chatService.BoardInfo(board_idx);
    }
}
