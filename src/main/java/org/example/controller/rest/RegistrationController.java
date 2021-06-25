package org.example.controller.rest;

import lombok.AllArgsConstructor;
import org.example.model.User;
import org.example.model.enumeration.userenum.Role;
import org.example.model.enumeration.userenum.State;
import org.example.model.request.RegRequest;
import org.example.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@AllArgsConstructor
public class RegistrationController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/registration")
    public ResponseEntity<?> registration(@RequestBody RegRequest request) {

        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setRole(Role.USER);
        user.setMobile(request.getMobile());
        user.setState(State.ACTIVE);
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userService.saveUser(user);

        Map<Object, Object> response = new HashMap<>();
        response.put("firstName", user.getFirstName());
        response.put("lastName", user.getLastName());

        return ResponseEntity.ok(response);
    }

}
