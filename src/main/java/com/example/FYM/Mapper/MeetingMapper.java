package com.example.FYM.Mapper;

import com.example.FYM.Model.MeetMember;
import com.example.FYM.Model.Meeting;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface MeetingMapper {

    @Select("select * from tb_meeting order by mt_idx desc limit 1;")
    public List<Meeting> search();

    @Select("select * from tb_meeting where mt_idx=#{attend}")
    public List<Meeting> reg(Integer attend);

    @Insert("insert into tb_meeting (mt_maker,mt_title, mt_desc, mt_type, mt_date, mt_time, mt_place, mt_member) values(#{mt_maker}, #{mt_title}, #{mt_desc}, #{mt_type}, #{mt_date}, #{mt_time}, #{mt_place}, #{mt_member})")
    public int create(Meeting create);

    @Insert("insert into tb_meeting_member (mt_idx, user_id) values(#{mt_idx}, #{user_id})")
    public int addMember(MeetMember meetingMember);

    @Select("select * from tb_meeting")
    public List<Meeting> MeetList();

    @Select("select * from tb_meeting where mt_idx=#{mt_idx}")
    public List<Meeting> MeetDetail(Integer mt_idx);

    @Update("update tb_meeting set mt_cnt = mt_cnt + 1 WHERE mt_idx = #{mtIdx}")
    public int attend(int mtIdx);
}