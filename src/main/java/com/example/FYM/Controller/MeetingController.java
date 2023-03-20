package com.example.FYM.Controller;

import com.example.FYM.Model.Meeting;
import com.example.FYM.Service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/meet")
@RestController
public class MeetingController {
    @Autowired
    MeetingService meetingService;

    @PostMapping("/create")
    public int create(@RequestBody Meeting create){
        return meetingService.create(create);
    }

    @GetMapping("/list")
    public List<Meeting> MeetList(){
        return meetingService.MeetList();
    }
}
