package org.example.controller.rest;

import lombok.AllArgsConstructor;
import org.example.model.Chat;
import org.example.model.User;
import org.example.model.enumeration.userenum.Role;
import org.example.model.enumeration.userenum.State;
import org.example.model.idmodel.IdChat;
import org.example.model.idmodel.IdContactUser;
import org.example.model.request.Contact;
import org.example.model.request.RegRequest;
import org.example.security.JwtTokenProvider;
import org.example.service.ChatService;
import org.example.service.SearchService;
import org.example.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class ApplicationController {

    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;
    private final ChatService chatService;
    private final PasswordEncoder passwordEncoder;
    private final SearchService searchService;

    @PreAuthorize("hasAuthority('developers:read')")
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

    @PreAuthorize("hasAuthority('developers:read')")
    @PostMapping("/get-user")
    public ResponseEntity<?> getUser(HttpServletRequest request) {

        User user = userService.findById(Long.parseLong(request.getHeader("id")));
        System.out.println(user);
        Map<Object, Object> response = new HashMap<>();
        response.put("firstName", user.getFirstName());
        response.put("lastName", user.getLastName());
//        response.put("photo", user.getUrlPhoto());
        response.put("mobile", user.getMobile());
        response.put("about", "Description");

        return ResponseEntity.ok(response);
    }

    @PreAuthorize("hasAuthority('developers:read')")
    @PostMapping("/chat")
    public ResponseEntity<?> sendMsg(HttpServletRequest request) {
        Map<Object, Object> response = new HashMap<>();
        User user = userService.findByMobile(jwtTokenProvider.getUserName(request.getHeader("Authorization")));
        User forUser = userService.findById(Long.parseLong(request.getHeader("idFor")));

        int hash = chatService.getHashCode(user.getId(), forUser.getId());
        IdChat idChat = user.getChatList().stream().filter(c -> c.getHashCode() == hash).findFirst().orElse(null);

        if (idChat != null) {

            Chat chat = chatService.findChatById(idChat.getIdChat());
            response.put("messages", chat.getMessages());

        }

        response.put("id", forUser.getId());
        response.put("firstName", forUser.getFirstName());
        response.put("lastName", forUser.getLastName());
        response.put("photo", forUser.getUrlPhoto());
        response.put("state", "Online");


        return ResponseEntity.ok(response);

    }


    @PostMapping("/registration")
    public ResponseEntity<?> registration(@RequestBody RegRequest request) {

        Map<Object, Object> response = new HashMap<>();

        String firstName = request.getFirstName();
        String lastName = request.getLastName();
        String mobile = request.getMobile();
        String about = request.getAbout();
        String password = request.getPassword();

        if (firstName == null) {
            response.put("state", "false");
            response.put("message", "firstName is empty");
            return ResponseEntity.ok(response);
        }
        if (lastName == null) {
            response.put("state", "false");
            response.put("message", "lastName is empty");
            return ResponseEntity.ok(response);
        }

        if (mobile == null) {
            response.put("state", "false");
            response.put("message", "mobile is empty");
            return ResponseEntity.ok(response);
        }

        if (password == null) {
            response.put("state", "false");
            response.put("message", "password is empty");
            return ResponseEntity.ok(response);
        }

        if (!request.getRepeatPassword().equals(password)) {
            response.put("state", "false");
            response.put("message", "Passwords don't match");
            return ResponseEntity.ok(response);
        }

        password = passwordEncoder.encode(request.getPassword());


        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setRole(Role.USER);
        user.setMobile(mobile);
        user.setAbout(about);
        user.setState(State.ACTIVE);
        user.setPassword(password);

        userService.saveUser(user);

        response.put("state", "true");
        response.put("message", "Done");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/search")
    public ResponseEntity<?> search(@RequestBody String value) {
        String valueN = value.replace("\"", "");
        Map<Object, Object> response = new HashMap<>();
System.out.println(value);
System.out.println(valueN);
        String firstName = searchService.getFirstName(valueN);
        String lastName = searchService.getLastName(firstName, valueN);

        System.out.println(firstName + "  " + lastName  );

        List<User> users = userService.findByFirstNameAndLastName(firstName, lastName);
        List<Contact> list = searchService.getContactList(users);
System.out.println(users);
        response.put("result", list);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/add-to-contact")
    public ResponseEntity<?> addToContact(HttpServletRequest request) {
System.out.println("Запрос на добавление контакта");
        Map<Object, Object> response = new HashMap<>();

        User user = userService.findByMobile(jwtTokenProvider.getUserName(request.getHeader("Authorization")));
        User newContact = userService.findById(Long.parseLong(request.getHeader("id-contact")));

        if (newContact != null) {
            IdContactUser idContactUser = new IdContactUser();
            idContactUser.setIdContact(newContact.getId());
            idContactUser.setIdUser(user.getId());
            user.getContactList().add(idContactUser);
            userService.saveUser(user);
            response.put("state", "true");
            System.out.println(user);
        } else {

            response.put("state", "false");
        }
        return ResponseEntity.ok(response);

    }
}