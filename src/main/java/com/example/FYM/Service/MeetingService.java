package com.example.FYM.Service;

import com.example.FYM.Mapper.MeetingMapper;
import com.example.FYM.Model.Meeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetingService {

    @Autowired
    MeetingMapper meetingMapper;

    public int create(Meeting create){
        return meetingMapper.create(create);
    }

    public List<Meeting> MeetList(){
        return meetingMapper.MeetList();
    }
}
