package org.example.service;

import lombok.AllArgsConstructor;
import org.example.model.Chat;
import org.example.model.User;
import org.example.model.request.Contact;
import org.example.repo.ChatRepo;
import org.example.repo.UserRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepo userRepo;
    private final ChatRepo chatRepo;

    public User findByMobile(String mobile) {
        return userRepo.findByMobile(mobile);
    }

    public User findById(long id){
        return userRepo.findById(id).orElse(null);
    }

    public List<User> getAllUsers() {

        return userRepo.findAll();
    }

    public List<Contact> getContactList(Iterable<Long> idContactsList) {
        List<Contact> contacts = new ArrayList<>();
        List<User> list = userRepo.findAllById(idContactsList);
        for (User user:list) {
            contacts.add(new Contact(user.getId(),user.getFirstName(),user.getLastName(),user.getUrlPhoto()));
        }
        return contacts;
    }

    public List<Chat> getChatList(Iterable<Long> idChatsList) {
       return chatRepo.findAllById(idChatsList);
    }

    public void saveUser(User user){
        userRepo.save(user);
    }

}
