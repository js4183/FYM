package com.example.FYM.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chatroom {
    // 채팅방 번호
    private Integer cr_idx;

    // 게시글 번호
    private Integer board_idx;

    // 내 닉네임
    private String user_nick1;

    // 채팅방 생성일
    private Date cr_date;

    // 상대방 닉네임
    private String user_nick2;

    // 채팅방 상태
    private String cr_status;
}
