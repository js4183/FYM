package com.example.FYM.Service;

import com.example.FYM.Mapper.MeetingMapper;
import com.example.FYM.Model.MeetMember;
import com.example.FYM.Model.Meeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MeetingService {

    @Autowired
    MeetingMapper meetingMapper;

    public int create(Meeting create){
        // 모임 생성
        int result = meetingMapper.create(create);
        if (result == 1) {
            ArrayList<Meeting> latestMeetings = (ArrayList<Meeting>) meetingMapper.search();
            Meeting latestMeeting = latestMeetings.get(0);
            // 모임 멤버 추가
            MeetMember meetingMember = new MeetMember();
            meetingMember.setMt_idx(latestMeeting.getMt_idx());
            meetingMember.setUser_id(latestMeeting.getMt_maker());
            result = meetingMapper.addMember(meetingMember);
        }
        return result;
    }

    public List<Meeting> MeetList(){
        return meetingMapper.MeetList();
    }

    public List<Meeting> MeetDetail(Integer mt_idx){
        return meetingMapper.MeetDetail(mt_idx);
    }

    public int attend(Integer attend){
        int res = meetingMapper.attend(attend);
        if(res==1){
            ArrayList<Meeting> latestMeetings = (ArrayList<Meeting>) meetingMapper.reg(attend);
            Meeting latestMeeting = latestMeetings.get(0);
            // 모임 멤버 추가
            MeetMember meetingMember = new MeetMember();
            meetingMember.setMt_idx(latestMeeting.getMt_idx());
            meetingMember.setUser_id(latestMeeting.getMt_maker());
            res = meetingMapper.addMember(meetingMember);
        }
        return res;
    }
}
