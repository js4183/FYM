package com.example.FYM.Service;

import com.example.FYM.Mapper.UserMapper;
import com.example.FYM.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public int sign(User sign){
        sign.setUser_pw(passwordEncoder.encode(sign.getUser_pw()));
        return userMapper.sign(sign);
    }

    public Boolean checkId(String id){
        return userMapper.checkId(id);
    }

    public Boolean checkNick(String nick){
        return userMapper.checkNick(nick);
    }

    public User login(@RequestBody User login){
        passwordEncoder.matches(login.getUser_pw(), userMapper.login(login).getUser_pw());
        return userMapper.login(login);
    }
}
