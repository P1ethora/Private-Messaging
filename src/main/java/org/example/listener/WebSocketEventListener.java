package org.example.listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.messaging.SessionConnectedEvent;

@Component
public class WebSocketEventListener {

    @Autowired
    private SimpUserRegistry simpUserRegistry;

    @EventListener
    public void handleWebSocketConnectListener(SessionConnectedEvent event) {
        StompHeaderAccessor sha = StompHeaderAccessor.wrap(event.getMessage());
//System.out.println("user " + sha.getUser().getName() +" was connected");
//        if(sha.getUser().getName().equals("2")){
            simpUserRegistry.getUsers();



//        System.out.println(simpUserRegistry.getUser(sha.getUser().getName()));
//        System.out.println(simpUserRegistry.getUsers());

    }

//    @EventListener
//    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
//        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
//
//        String username = (String) headerAccessor.getSessionAttributes().get("username");
//        if(username != null) {
//            logger.info("User Disconnected : " + username);
//
//            ChatMessage chatMessage = new ChatMessage();
//            chatMessage.setType(ChatMessage.MessageType.LEAVE);
//            chatMessage.setSender(username);
//
//            messagingTemplate.convertAndSend("/topic/public", chatMessage);
//        }
//    }
}