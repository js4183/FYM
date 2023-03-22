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
    public int sign(@RequestBody User sign){
        return userService.sign(sign);
    }

    @GetMapping("/checkid/{id}")
    public Boolean checkId(@PathVariable("id") String id){
        return userService.checkId(id);
    }

    @GetMapping("/checknick/{nick}")
    public Boolean checkNick(@PathVariable("nick") String nick){
        return userService.checkNick(nick);
    }

    @PostMapping("/login")
    public User login(@RequestBody User login){
        return userService.login(login);
    }

    @PostMapping("/update")
    public int update(@RequestBody User edit){
        return userService.update(edit);
    }

    @PostMapping("/delete")
    public int delete(@RequestBody User delete){
        return userService.delete(delete);
    }
}
