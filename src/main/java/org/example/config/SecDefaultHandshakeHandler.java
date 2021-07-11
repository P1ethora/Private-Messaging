package org.example.config;

import lombok.AllArgsConstructor;
import org.example.model.system.CustomPrincipal;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

import java.security.Principal;
import java.util.Map;

@Component
@AllArgsConstructor
public class SecDefaultHandshakeHandler extends DefaultHandshakeHandler {

    @Override
    public Principal determineUser(ServerHttpRequest request, WebSocketHandler handler, Map<String, Object> attributes) {
        String id = String.valueOf(attributes.get("user"));
        return new CustomPrincipal(id);

    }
}