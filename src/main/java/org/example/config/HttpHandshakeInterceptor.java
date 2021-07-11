package org.example.config;

import lombok.AllArgsConstructor;
import org.example.model.User;
import org.example.security.JwtAuthenticationException;
import org.example.security.JwtTokenProvider;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@Component
@AllArgsConstructor
public class HttpHandshakeInterceptor implements HandshakeInterceptor {

    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler handler, Map<String, Object> attributes) throws IOException {

        try {
            String uri = request.getURI().toString();
            String token = uri.split("\\?token=")[1].trim();
            System.out.println(token);
            User user = userService.findByMobile(jwtTokenProvider.getUserName(token));
            if (user != null && user.getId() != 0) {
                attributes.put("user", user.getId());
                return true;
            } else {
                return false;
            }
        } catch (JwtAuthenticationException e) {
            ((HttpServletResponse) response).sendError(e.getHttpStatus().value());
            throw new JwtAuthenticationException("JWT token is invalid");
        }

    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {

    }
}
