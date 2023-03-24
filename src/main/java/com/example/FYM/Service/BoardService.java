package com.example.FYM.Service;

import com.example.FYM.Mapper.BoardMapper;
import com.example.FYM.Model.Board;
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
        return boardMapper.freeViewDetail(idx);
    }

    public void freeBoardDelete(String board_idx) {
        boardMapper.freeBoardDelete(board_idx);
    }
}
