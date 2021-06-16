package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor

@Data
public class User {
    private int id;
    private String name;
    private List<Integer> chatList;

 public static int countUser = 5;
    public static List<User> users = new ArrayList<>(List.of(new User(1,"Ivan",new ArrayList<>()),
            new User(2,"Victor",new ArrayList<>()),
            new User(3,"Vasya",new ArrayList<>()),
            new User(4,"Igor",new ArrayList<>()),
            new User(5,"Wine",new ArrayList<>())));

}