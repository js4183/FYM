package com.example.FYM.Mapper;

import com.example.FYM.Model.Meeting;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MeetingMapper {
    @Insert("insert into tb_meeting (mt_maker,mt_title, mt_desc, mt_type, mt_date, mt_time, mt_place, mt_member) values(#{mt_maker}, #{mt_title}, #{mt_desc}, #{mt_type}, #{mt_date}, #{mt_time}, #{mt_place}, #{mt_member})")
    public int create(Meeting create);

    @Select("select * from tb_meeting")
    public List<Meeting> MeetList();
}