package com.example.FYM.Controller;

import com.example.FYM.Model.Board;
import com.example.FYM.Service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/board")
@RestController
public class BoardController {
    @Autowired
    BoardService boardService;

    @PostMapping("/free")
    public void freeBoardWrite(@RequestBody Map<String, String> data) {
        HashMap<String, String> post = new HashMap<>();
        post.put("user_nick", data.get("nick"));
        post.put("b_cate", data.get("category"));
        post.put("b_title", data.get("title"));
        post.put("b_cnt", data.get("content"));
        boardService.freeBoardWrite(post);
    }

    @PostMapping("/view")
    public List<Board> boardView() {
        return boardService.boardView();
    }

    @PostMapping("/free/viewdetail")
    public List<Board> freeViewDetail(@RequestBody Map<String, String> data) {
        String idx = data.get("idx");
        return boardService.freeViewDetail(idx);
    }

    @PostMapping("/free/delete")
    public void freeBoardDelete(@RequestBody Map<String, String> data) {
        String board_idx = data.get("board_idx");
        boardService.freeBoardDelete(board_idx);
    }
}
