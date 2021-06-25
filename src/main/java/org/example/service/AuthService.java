package org.example.service;

import lombok.AllArgsConstructor;
import org.example.model.User;
import org.example.repo.UserRepo;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepo userRepo;

    public User getAuthUser() {
        Authentication loggedInUser = SecurityContextHolder.getContext().getAuthentication();
        return userRepo.findByMobile(loggedInUser.getName());
    }

}