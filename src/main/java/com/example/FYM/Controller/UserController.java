package com.example.FYM.Controller;

import com.example.FYM.Model.User;
import com.example.FYM.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/sign")
    public int sign(@RequestBody User sign) {
        return userService.sign(sign);
    }
}
