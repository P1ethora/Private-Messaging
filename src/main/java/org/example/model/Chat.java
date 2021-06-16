package org.example.model;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Chat {
    private int id;
    private int[] idUsers;
    private List<Message> messages;

    public static int countChat = 0;
    public static List<Chat> chats = new ArrayList<>();


}
