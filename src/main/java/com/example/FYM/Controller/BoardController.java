package com.example.FYM.Controller;

import com.example.FYM.Model.Board;
import com.example.FYM.Model.Meeting;
import com.example.FYM.Model.tb_board;
import com.example.FYM.Service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/writedo")
    public String boardWritePro(@RequestBody Map<String, String> data){
        //String title = data.get("title");
        //String content = data.get("content");
        //System.out.println("제목"+data.get("title"));
        //System.out.println("내용"+data.get("content"));

//        if (title == null || content == null) { // null 값이 넘어온 경우
//            return "fail";
//        }

        HashMap<String, String> TC = new HashMap<>();
        TC.put("title", data.get("title"));
        TC.put("content", data.get("content"));

        return boardService.boardWritePro(TC);
    }

    @GetMapping("/list")
    public List<tb_board> boardList(){
        return boardService.boardList();
    }

    @GetMapping("/view/{b_idx}")
    public List<tb_board> boardDetail(@PathVariable("b_idx") Integer b_idx){
        return boardService.boardDetail(b_idx);
    }

    @PostMapping("/delete")
    public String boardDelete(@RequestBody Map<String, String> map){
        Integer b_idx = Integer.valueOf(map.get("b_idx"));
//        System.out.println("map:"+map);
//        System.out.println("b_idx:"+map.get("b_idx"));
//        System.out.println(b_idx);

        return boardService.boardDelete(b_idx);
    }

    @GetMapping("/posts/{b_idx}")
    public List<tb_board> postsDetail(@PathVariable("b_idx") Integer b_idx){
        return boardService.postsDetail(b_idx);
    }

    @PostMapping("/editdo")
    public int postsEdit(@RequestBody tb_board data){
        return boardService.postsEdit(data);
    }
}
