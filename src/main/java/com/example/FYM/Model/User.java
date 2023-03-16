package com.example.FYM.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer user_idx;
    private String user_id;
    private String user_pw;
    private String user_nick;
}
