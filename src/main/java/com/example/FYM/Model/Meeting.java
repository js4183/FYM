package com.example.FYM.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Meeting {

    private Integer mt_idx;
    private String mt_maker;
    private String mt_title;
    private String mt_desc;
    private String mt_type;
    private String mt_date;
    private String mt_time;
    private String mt_place;
    private Integer mt_cnt;
    private Integer mt_member;
}
