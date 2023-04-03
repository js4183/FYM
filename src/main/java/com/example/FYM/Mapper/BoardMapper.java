package com.example.FYM.Mapper;

import com.example.FYM.Model.Board;
import com.example.FYM.Model.tb_board;
import org.apache.ibatis.annotations.*;
import org.springframework.data.domain.Page;

import java.awt.print.Pageable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Mapper
public interface BoardMapper {
    @Insert("insert into board(board_idx, user_nick, board_cate, board_title, board_contents, board_date) values(null, #{user_nick}, #{b_cate}, #{b_title}, #{b_cnt}, DATE_ADD(NOW(), INTERVAL 9 HOUR))")
    public void freeBoardWrite(HashMap<String, String> post);

    @Select("select * from board order by board_idx desc")
    public List<Board> boardView();

    @Update("update board set board_cnt = board_cnt + 1 where board_idx=#{idx}")
    public void hitUp(String eidx);

    @Select("select * from board where board_idx=#{idx}")
    public List<Board> freeViewDetail(String idx);

    @Delete("delete from board where board_idx=#{board_idx}")
    public void freeBoardDelete(String board_idx);

    @Insert("insert into tb_board(board_idx, board_title, board_content) values(null, #{title}, #{content})")
    public int boardWritePro(HashMap<String, String> TC);

    @Select("select * from tb_board")
    public List<tb_board> boardList();

//    @Select("SELECT * FROM tb_board")
//    public Page<tb_board> boardList(Pageable pageable);

    @Select("select * from tb_board where board_idx=#{b_idx}")
    public List<tb_board> boardDetail(Integer b_idx);

    @Delete("delete from tb_board where board_idx=#{b_idx}")
    public int boardDelete(Integer b_idx);

    @Select("select * from tb_board where board_idx=#{b_idx}")
    public List<tb_board> postsDetail(Integer b_idx);

    @Update("update tb_board set board_title=#{board_title}, board_content=#{board_content} where board_idx=#{board_idx}")
    public int postsEdit(tb_board data);
}
