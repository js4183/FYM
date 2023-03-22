package com.example.FYM.WebSocket;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class ChatHandler extends TextWebSocketHandler {
    private final List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    // 현재 로그인 중인 유저들의 정보 저장
    Map<String, WebSocketSession> users = new ConcurrentHashMap<>();

    Gson gson = new Gson();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("afterConnectionEstablished:" + session);

        String userSession = session.getId();
        users.put(userSession, session);
        System.out.println("접속중인 session : "+users);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        System.out.println("Received message: " + payload);

        Map<String, Object> data = gson.fromJson(message.getPayload(), Map.class);
        System.out.println("객체 변환한 데이터"+data);
        System.out.println(data.get("talker"));

        if (data.get("talker") != null && users.containsKey(session.getId())) {
            for ( Map.Entry<String, WebSocketSession> entry : users.entrySet()) {
                WebSocketSession chatSession = entry.getValue();
                System.out.println("채팅을 보내줄 세션들 : "+chatSession);
                chatSession.sendMessage(new TextMessage(payload));
            }
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("afterConnectionClosed:" + session + ":" + status);
        users.remove(session.getId());
        System.out.println("남아있는 세션 : "+users);
    }
}
