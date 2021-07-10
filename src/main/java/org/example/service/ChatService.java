package org.example.service;

import lombok.AllArgsConstructor;
import org.example.model.Chat;
import org.example.repo.ChatRepo;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ChatService {

    private final ChatRepo chatRepo;

    public int getHashCode(long idUserOne, long idUserTwo) {
        return Math.toIntExact(((idUserOne + idUserTwo) * 2) - Math.max(idUserOne, idUserTwo));

    }

    public Chat findChatById(long id) {
        return chatRepo.findById(id).orElse(null);
    }

public void save(Chat chat) {
        chatRepo.save(chat);
}

}
