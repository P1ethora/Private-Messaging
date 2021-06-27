package org.example.controller.rest;

import lombok.AllArgsConstructor;
import org.example.model.Chat;
import org.example.model.User;
import org.example.model.idmodel.IdChat;
import org.example.model.idmodel.IdContactUser;
import org.example.security.JwtTokenProvider;
import org.example.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @PostMapping("/yourself")
    public ResponseEntity<?> getYourself(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        User user = userService.findByMobile(jwtTokenProvider.getUserName(token));
        List<Long> list = new ArrayList<>();
        for (IdContactUser idContact : user.getContactList()) {
            list.add(idContact.getIdContact());
        }

        List<User> contactList = userService.getContactList(list);

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
}