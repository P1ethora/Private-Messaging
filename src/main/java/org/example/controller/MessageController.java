package org.example.controller;

import lombok.AllArgsConstructor;
import org.example.model.Chat;
import org.example.model.Message;
import org.example.model.User;
import org.example.model.enumeration.MessageState;
import org.example.model.idmodel.IdChat;
import org.example.security.JwtTokenProvider;
import org.example.service.ChatService;
import org.example.service.UserService;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@RestController
public class MessageController {

    private final UserService userService;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final JwtTokenProvider jwtTokenProvider;
    private final ChatService chatService;


    @MessageMapping("/messages/{id}")
    public void sendMessage(@DestinationVariable int id, Message message, SimpMessageHeaderAccessor simpMessageHeaderAccessor) {
      //TODO EXCEPTIONS IN SHOW USER CHAT LIST
        Date date = new Date();
        String token = simpMessageHeaderAccessor.getFirstNativeHeader("Authorization");
        User user = userService.findByMobile(jwtTokenProvider.getUserName(token));
        User userFor = userService.findById(id);
        System.out.println("MESSAGE");
        Chat chat = null;
        if (userFor != null && user != null) {
            System.out.println(user.getChatList());
            int hash = chatService.getHashCode(user.getId(), id);
            if (user.getChatList() != null) {

                IdChat idChat = user.getChatList().stream().filter(c -> c.getHashCode() == hash).findFirst().orElse(null);
                if(idChat!=null) {
                    chat = chatService.findChatById(idChat.getIdChat());
                }
                if (chat == null) {
                    createChat(chat, user, userFor, message, hash);
                } else {
                    System.out.println("чат существует, просто добавляю сообщение");
                    chat.getMessages().add(message);
                    chatService.save(chat);
                    System.out.println("Теперь чат выглядит так: " + chat);
                }
            } else {
                createChat(chat, user, userFor, message, hash);
            }
            String userActualName = user.getFirstName() + " " + user.getLastName();

            message.setNameFrom(userActualName);
//            message.setIdChat(chat.getId());
            message.setState(MessageState.UNREAD);
            message.setDate(date);
                simpMessagingTemplate.convertAndSendToUser(String.valueOf(userFor.getId()),"/topic/messages/" +
                        userFor.getId(), message);
                System.out.println("sender");

        }
    }


    private void createChat(Chat chat, User user, User userFor, Message message, int hash) {
        System.out.println("Создаю чат");
        chat = new Chat();
        chat.setIdUserOne(user.getId());
        chat.setIdUserTwo(userFor.getId());
        chat.setMessages(new ArrayList<>(List.of(message)));
        chatService.save(chat);

        IdChat idChat1 = new IdChat();
        idChat1.setIdChat(chat.getId());
        idChat1.setHashCode(hash);

        user.getChatList().add(idChat1);
        userFor.getChatList().add(idChat1);
    }

}