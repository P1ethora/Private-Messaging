package org.example.config;

import com.sun.security.auth.UnixPrincipal;
import lombok.AllArgsConstructor;
import org.example.model.User;
import org.example.model.system.CustomPrincipal;
import org.example.security.JwtAuthenticationException;
import org.example.security.JwtTokenProvider;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.Map;

@Component
@AllArgsConstructor
public class SecDefaultHandshakeHandler extends DefaultHandshakeHandler {

    private JwtTokenProvider jwtTokenProvider;
    private UserService userService;

    @Override
    public Principal determineUser(ServerHttpRequest request, WebSocketHandler handler, Map<String, Object> attributes) {

        CustomPrincipal customPrincipal = new CustomPrincipal();

        String uri = request.getURI().toString();
        String token = uri.split("\\?token=")[1].trim();
        User user = userService.findByMobile(jwtTokenProvider.getUserName(token));

        if(user==null) {
            return new CustomPrincipal("unknown");
        }

        return new CustomPrincipal(String.valueOf(user.getId()));
    }
}