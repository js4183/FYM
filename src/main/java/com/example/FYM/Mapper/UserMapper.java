package com.example.FYM.Mapper;

import com.example.FYM.Model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    @Insert("insert into tb_user (user_id, user_pw, user_nick) values(#{user_id}, #{user_pw}, #{user_nick})")
    public int sign(User sign);
}
