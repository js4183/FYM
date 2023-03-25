package com.example.FYM.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Board {
    // 게시글 번호
    private Integer board_idx;

    // 회원 닉네임
    private String user_nick;

    // 게시글 유형
    private String board_cate;

    // 게시글 제목
    private String board_title;

    // 게시글 내용
    private String board_contents;

    // 게시글 작성일
    private Date board_date;

    // 게시글 수정일
    private Date board_update;

    // 파일1
    private String board_file1;

    // 파일2
    private String board_file2;

    // 파일3
    private String board_file3;

    // 글 조회수
    private Integer board_cnt;

    // 게시글 신고횟수
    private Integer board_report;

    private Integer board_like;

}
