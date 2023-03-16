package com.example.FYM.Mapper;

import com.example.FYM.Model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
    @Insert("insert into tb_user (user_email, user_pw, user_nick) values(#{user_email}, #{user_pw}, #{user_nick})")
    public int sign(User sign);

    @Select("Select user_email from tb_user where user_email=#{email}")
    public Boolean checkEmail(String email);

    @Select("Select user_nick from tb_user where user_nick=#{nick}")
    public Boolean checkNick(String nick);

    @Select("Select * from tb_user where user_email=#{user_email}")
    public User login(User login);
}
