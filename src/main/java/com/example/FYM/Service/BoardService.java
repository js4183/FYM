package com.example.FYM.Service;

import com.example.FYM.Mapper.BoardMapper;
import com.example.FYM.Model.Board;
import com.example.FYM.Model.tb_board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

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
}
