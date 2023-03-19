package com.example.FYM.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatContent {
    // 채팅내용 번호
    private Integer cc_idx;

    // 채팅방 번호
    private Integer cr_idx;

    // 게시글 번호
    private Integer board_idx;

    // 발화자
    private String talker;

    // 채팅 메세지
    private String msg;

    // 메세지 시간
    private Date msg_time;
}
