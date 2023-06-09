package com.example.FYM.Mapper;

import com.example.FYM.Model.ChatContent;
import com.example.FYM.Model.Chatroom;
import com.example.FYM.Model.MeetContent;
import com.example.FYM.Model.Meeting;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Mapper
public interface ChatMapper {

    @Select("select * from chatroom where (user_nick1=#{user_nick} or user_nick2=#{user_nick}) and cr_status='1' order by cr_idx desc")
    public List<Chatroom> ChatList(String user_nick);

    @Select("SELECT * FROM tb_meeting WHERE mt_idx IN (SELECT mt_idx FROM tb_meeting_member WHERE user_id = #{user_nick})")
    public List<Meeting> MeetList(String user_nick);

    @Insert("insert into chatcontent values(null, #{cr_idx}, #{board_idx}, #{talker}, #{msg}, DATE_ADD(NOW(), INTERVAL 9 HOUR))")
    public void ChatSend(HashMap<String, String> msg);

    @Insert("insert into meetcontent values(null, null, #{mt_idx}, #{talker}, #{msg}, DATE_ADD(NOW(), INTERVAL 9 HOUR))")
    public void ChattingSend(HashMap<String, String> msg);

    @Select("select * from chatcontent where cr_idx = #{cr_idx}")
    public List<ChatContent> Chatting(String cr_idx);

    @Select("select * from meetcontent where mt_idx = #{mt_idx}")
    public List<MeetContent> Meetting(String mt_idx);

    @Update("update chatroom set cr_status='0' where cr_idx=#{cr_idx}")
    public void RoomExit(String cr_idx);

    @Select("select * from board where board_idx=#{board_idx}")
    public Map<String, Object> ChatInfo(String board_idx);

    @Select("select * from chatroom where (user_nick1=#{user_nick} or user_nick2=#{user_nick}) and cr_status='1' order by cr_idx desc")
    public List<Chatroom> ChatRoomList(String user_nick);

    @Insert("insert into chatroom values(null, #{board_idx}, #{user_nick1}, DATE_ADD(NOW(), INTERVAL 9 HOUR), #{user_nick2}, 1)")
    public void NewChatRoom(HashMap<String, String> map);

    @Insert("insert into chatcontent values(null, #{cr_idx}, #{board_idx}, #{talker}, #{msg}, DATE_ADD(NOW(), INTERVAL 9 HOUR))")
    public void ChatSendMsg(HashMap<String, String> msg);

    @Select("select * from chatcontent where cr_idx = #{cr_idx}")
    public List<ChatContent> MsgList(String cr_idx);

    @Update("update chatroom set cr_status='0' where cr_idx=#{cr_idx}")
    public void ExitChat(String cr_idx);

    @Select("select * from board where board_idx=#{board_idx}")
    public Map<String, Object> BoardInfo(String board_idx);
}
