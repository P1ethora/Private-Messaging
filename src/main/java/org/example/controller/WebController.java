package org.example.controller;

import lombok.AllArgsConstructor;
import org.example.service.AuthService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/winy")
    public String getApp() {
        
        return "application";

    }
}