package com.example.FYM.Service;

import com.example.FYM.Mapper.BoardMapper;
import com.example.FYM.Model.Board;
import com.example.FYM.Model.tb_board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BoardService {
    @Autowired
    BoardMapper boardMapper;

    public void freeBoardWrite(HashMap<String, String> post) {
        boardMapper.freeBoardWrite(post);
    }

    public List<Board> boardView() {
        return boardMapper.boardView();
    }

    public List<Board> freeViewDetail(String idx) {
        boardMapper.hitUp(idx);
        return boardMapper.freeViewDetail(idx);
    }

    public void freeBoardDelete(String board_idx) {
        boardMapper.freeBoardDelete(board_idx);
    }

    public String boardWritePro(HashMap<String, String> TC){
        if (TC == null) { // null 값이 넘어온 경우
            //return "fail";
            throw new NullPointerException("TC object is null");
        }else{
            int res = boardMapper.boardWritePro(TC);
            if(res==1){
                return "success";
            }else{
                return "fail";
            }
        }
    }

    public List<tb_board> boardList(){
        return boardMapper.boardList();
    }

    public List<tb_board> boardDetail(Integer b_idx){
        return boardMapper.boardDetail(b_idx);
    }

    public String boardDelete(Integer b_idx){
        int res = boardMapper.boardDelete(b_idx);
        if(res == 1){
            return "success";
        }else{
            return "fail";
        }
    }

    public List<tb_board> postsDetail(Integer b_idx){
        return boardMapper.postsDetail(b_idx);
    }

    public int postsEdit(tb_board data){
        return boardMapper.postsEdit(data);
    }
}
