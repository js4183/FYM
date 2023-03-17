package com.example.FYM.Mapper;

import com.example.FYM.Model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UserMapper {
    @Insert("insert into tb_user (user_id, user_pw, user_nick) values(#{user_id}, #{user_pw}, #{user_nick})")
    public int sign(User sign);

    @Select("Select user_id from tb_user where user_id=#{id}")
    public Boolean checkId(String id);

    @Select("Select user_nick from tb_user where user_nick=#{nick}")
    public Boolean checkNick(String nick);

    @Select("Select * from tb_user where user_id=#{user_id}")
    public User login(User login);

    @Update("update tb_user set user_nick=#{user_nick}, user_pw=#{user_pw} where user_id=#{user_id}")
    public int update(User edit);
}
