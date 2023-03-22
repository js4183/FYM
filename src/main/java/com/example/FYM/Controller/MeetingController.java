package com.example.FYM.Controller;

import com.example.FYM.Model.Meeting;
import com.example.FYM.Service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @GetMapping("/detail/{mt_idx}")
    public List<Meeting> MeetDetail(@PathVariable("mt_idx") Integer mt_idx){
        return meetingService.MeetDetail(mt_idx);
    }

    @PostMapping("/attend")
    public int attend(@RequestBody Map<String, Object> map){
        return meetingService.attend(map);
    }
}
