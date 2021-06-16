package org.example.controller;//package org.example.controller;
//
//import org.example.model.User;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//

import org.example.model.Chat;
import org.example.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class PageController {

    @GetMapping("/{id}")
    public String getMainPage(@PathVariable("id") int id, Model model) {
        User user = User.users.stream().filter(u -> u.getId() == id).findFirst().orElse(null);
        List<Chat> chats = Chat.chats.stream()
                .filter(chat -> user.getChatList().stream()
                        .anyMatch(integer -> chat.getId() == integer))
                .collect(Collectors.toList());

        model.addAttribute("user", user);
        model.addAttribute("chats", chats);
        model.addAttribute("users", User.users);
        model.addAttribute("detect", new Detect());
        return "main";
    }

    static class Detect {
        public String detectName(Chat chat, User user) {
            int[] idUsers = chat.getIdUsers();
            if (idUsers[0] == idUsers[1]) {
                return "monologue";
            } else {
                int id = 0;
                for (int a : idUsers) {
                    if (a != user.getId()) {
                        id = a;
                        break;
                    }
                }
                int finalId = id;
                System.out.println(finalId);
                return User.users.stream()
                        .filter(u -> u.getId() == finalId)
                        .findFirst()
                        .orElse(null)
                        .getName();
            }
        }
    }

}
//
////    @GetMapping("/two")
////    public String getMainPage2(Model model) {
////User user = User.users.get(1);
////checkChat(user);
////model.addAttribute("chat",user.getChatList().get(0));
////        return "main";
////    }
////
////    private void checkChat(User user) {
////        if(user.getChatList()==null) {
////            user.setChatList(new ArrayList<>());
////        }
////    }
//
//}
