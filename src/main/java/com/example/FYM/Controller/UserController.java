package com.example.FYM.Controller;

import com.example.FYM.Model.User;
import com.example.FYM.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/user")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/sign")
    public int sign(@RequestBody User sign) {
        return userService.sign(sign);
    }

    @GetMapping("/checkemail/{email}")
    public Boolean checkEmail(@PathVariable("email") String email){
        return userService.checkEmail(email);
    }

    @GetMapping("/checknick/{nick}")
    public Boolean checkNick(@PathVariable("nick") String nick){
        return userService.checkNick(nick);
    }
}
