package com.example.FYM.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MeetContent {
    private Integer mc_idx;
    private Integer mr_idx;
    private Integer mt_idx;
    private String talker;
    private String msg;
    private Date msg_time;
}
