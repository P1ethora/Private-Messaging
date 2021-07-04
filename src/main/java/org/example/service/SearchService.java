package org.example.service;

import org.example.model.User;
import org.example.model.request.Contact;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {

    public String getFirstName(String value) {
       String clearValue = value.trim();
       String[] array = clearValue.split(" ");

       return array[0];
    }

    public String getLastName(String firstName,String value) {
       return value.replace(firstName,"").trim();
    }


    public List<Contact> getContactList(List<User> users) {

        List<Contact> contacts = new ArrayList<>();

            for (User user:users) {
                contacts.add(new Contact(user.getId(),user.getFirstName(),user.getLastName(),user.getUrlPhoto()));
            }

        return contacts;
    }

}
