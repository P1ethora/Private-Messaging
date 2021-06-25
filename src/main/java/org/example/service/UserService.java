package org.example.service;

import lombok.AllArgsConstructor;
import org.example.model.Chat;
import org.example.model.User;
import org.example.repo.ChatRepo;
import org.example.repo.UserRepo;
import org.springframework.stereotype.Service;

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

    public List<User> getContactList(Iterable<Long> idContactsList) {

        return userRepo.findAllById(idContactsList);
    }

    public List<Chat> getChatList(Iterable<Long> idChatsList) {
       return chatRepo.findAllById(idChatsList);
    }

    public void saveUser(User user){
        userRepo.save(user);
    }

}
