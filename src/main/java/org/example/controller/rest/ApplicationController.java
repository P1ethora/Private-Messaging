package org.example.controller.rest;

import lombok.AllArgsConstructor;
import org.example.model.Chat;
import org.example.model.User;
import org.example.model.idmodel.IdChat;
import org.example.model.idmodel.IdContactUser;
import org.example.model.request.Contact;
import org.example.security.JwtTokenProvider;
import org.example.service.ChatService;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@PreAuthorize("hasAuthority('developers:read')")
@RequestMapping("/api")
public class ApplicationController {

    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;
    private final ChatService chatService;

    @PostMapping("/yourself")
    public ResponseEntity<?> getYourself(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        User user = userService.findByMobile(jwtTokenProvider.getUserName(token));
        List<Long> list = new ArrayList<>();
        for (IdContactUser idContact : user.getContactList()) {
            list.add(idContact.getIdContact());
        }

        List<Contact> contactList = userService.getContactList(list);

        List<Long> list1 = new ArrayList<>();
        for (IdChat idChat : user.getChatList()) {
            list1.add(idChat.getIdChat());
        }

        List<Chat> chatList = userService.getChatList(list1);

        Map<Object, Object> response = new HashMap<>();
        response.put("firstName", user.getFirstName());
        response.put("lastName", user.getLastName());
        response.put("id", user.getId());
        response.put("photo", user.getUrlPhoto());
        response.put("mobile", user.getMobile());

        response.put("contactList", contactList);
        response.put("chatList", chatList);

        return ResponseEntity.ok(response);
    }


    @PostMapping("/get-user")
    public ResponseEntity<?> getUser(HttpServletRequest request) {

        User user = userService.findById(Long.parseLong(request.getHeader("id")));
System.out.println(user);
        Map<Object, Object> response = new HashMap<>();
        response.put("firstName", user.getFirstName());
        response.put("lastName", user.getLastName());
//        response.put("photo", user.getUrlPhoto());
        response.put("mobile", user.getMobile());
        response.put("about","Description");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/chat")
    public ResponseEntity<?> sendMsg(HttpServletRequest request) {
        Map<Object, Object> response = new HashMap<>();
        User user = userService.findByMobile(jwtTokenProvider.getUserName(request.getHeader("Authorization")));
       User forUser = userService.findById(Long.parseLong(request.getHeader("id")));

       int hash = chatService.getHashCode(user.getId(),forUser.getId());
       IdChat idChat = user.getChatList().stream().filter(c->c.getHashCode() == hash).findFirst().orElse(null);

       if(idChat!=null) {

Chat chat = chatService.findChatById(idChat.getIdChat());
response.put("messages",chat.getMessages());

       }

       response.put("id",forUser.getId());
       response.put("firstName",forUser.getFirstName());
       response.put("lastName",forUser.getLastName());
       response.put("photo",forUser.getUrlPhoto());
       response.put("state","Online");


        return ResponseEntity.ok(response);

    }
}