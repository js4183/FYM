package com.example.FYM.WebSocket;

import com.google.gson.Gson;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.net.URLDecoder;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class EchoHandler {
//    // 로그인중인 개별유저
//    Map<String, WebSocketSession> users = new ConcurrentHashMap<String, WebSocketSession>();
//
//    Gson gson = new Gson();
//
//    // 클라이언트가 서버로 연결시
//    @Override
//    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
//        System.out.println("afterConnectionEstablished : " + session);
//        String[] uri = session.getUri().toString().split("/");
//        users.put(URLDecoder.decode(uri[uri.length - 1], "UTF-8"), session);
//        System.out.println("uri : " + uri);
//        System.out.println("소켓연결완료 : " + users.toString());
//    }
//
//    // 알림메시지
//    @Override
//    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
//        System.out.println("소켓연결완료 : " + users.toString());
//        System.out.println("message.getPayload : " + message.getPayload());
//        Map<String, Object> data = gson.fromJson(message.getPayload(), Map.class);
//
//        if (data.get("mb_id_from") != null && users.containsKey(data.get("mb_id_to"))) {
//            System.out.println("데이터 뿌려짐");
//            users.get(data.get("mb_id_to")).sendMessage(new TextMessage(message.getPayload()));
//        }
//        System.out.println("session : " + session);
//    }
}
