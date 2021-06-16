package org.example.controller;

import org.example.model.Chat;
import org.example.model.EventMessage;
import org.example.model.Message;
import org.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MessageController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/messages/{id}")
    public void sendMessage(@DestinationVariable int id, Message message) {
        int idUserActual = 1;//Define through session, now this is just an example
        int idCompanion = id;
        Chat chat = defineSimilarityNewChat(idUserActual, idCompanion);
        System.out.println("Чат: " + chat);
        User user = User.users.stream().filter(u -> u.getId() == idUserActual).findFirst().orElse(null);
        User userFor = null;

        if (idUserActual != message.getForLogin()) {
            userFor = User.users.stream().filter(u -> u.getId() == message.getForLogin()).findFirst().orElse(null);
        }

        System.out.println("Сообщение для юзера" + id + " = " + message);
        if (chat == null) {
            System.out.println("Создаю чат");
            chat = new Chat();
            chat.setId(Chat.countChat + 1);
            Chat.countChat++;
            chat.setIdUsers(new int[]{idUserActual, message.getForLogin()});
            message.setId(1);
            chat.setMessages(new ArrayList<>(List.of(message)));
            Chat.chats.add(chat);

            user.getChatList().add(chat.getId());
            if (idUserActual != message.getForLogin()) {
                userFor.getChatList().add(chat.getId());
            }

        } else {
            System.out.println("чат существует, просто добавляю сообщение");
            chat.getMessages().add(message);
            System.out.println("Теперь чат выглядит так: " + chat);
        }
//TODO отработать сообщение самому себе;
        int idChat = chat.getId();
        String userActualName = user.getName();
        String userCompanionName = userFor.getName();

        EventMessage eventMessage = new EventMessage(idUserActual, idCompanion, idChat, userActualName, userCompanionName);
        simpMessagingTemplate.convertAndSend("/topic/messages/" + idCompanion, eventMessage);
        simpMessagingTemplate.convertAndSend("/topic/messages/" + idCompanion, message);

        if(idUserActual != message.getForLogin()) {
            EventMessage eventMessage1 = new EventMessage(idUserActual, idCompanion, chat.getId(), userFor.getName(), null);
            simpMessagingTemplate.convertAndSend("/topic/messages/" + idUserActual, eventMessage1);
        }

    }

    public boolean checkUser(int idUserActual, Message message) {
        return idUserActual != message.getForLogin();
    }

    public Chat defineSimilarityNewChat(int idActual, int idCompanion) {
        int number = hashNumber(idActual, idCompanion);

        for (Chat chat : Chat.chats) {
            int numberChat = hashNumber(chat.getIdUsers()[0], chat.getIdUsers()[1]);
            if (number == numberChat) {
                return chat;
            }
        }
        return null;
    }

    private int hashNumber(int first, int two) {
        return (((first * two) + (first + two)) * 2) - Math.max(first, two);
    }
}