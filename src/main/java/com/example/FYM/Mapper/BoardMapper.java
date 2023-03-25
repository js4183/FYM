package com.example.FYM.Mapper;

import com.example.FYM.Model.Board;
import org.apache.ibatis.annotations.*;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface BoardMapper {
    @Insert("insert into board(board_idx, user_nick, board_cate, board_title, board_contents, board_date) values(null, #{user_nick}, #{b_cate}, #{b_title}, #{b_cnt}, DATE_ADD(NOW(), INTERVAL 9 HOUR))")
    public void freeBoardWrite(HashMap<String, String> post);

    @Select("select * from board order by board_idx desc")
    public List<Board> boardView();

    @Update("update board set board_cnt = board_cnt + 1 where board_idx=#{idx}")
    public void hitUp(String idx);

    @Select("select * from board where board_idx=#{idx}")
    public List<Board> freeViewDetail(String idx);

    @Delete("delete from board where board_idx=#{board_idx}")
    public void freeBoardDelete(String board_idx);
}
