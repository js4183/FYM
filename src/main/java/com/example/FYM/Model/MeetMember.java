package com.example.FYM.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MeetMember {
    private Integer mm_idx;
    private Integer mt_idx;
    private String user_id;
    private Timestamp reg_date;
}
