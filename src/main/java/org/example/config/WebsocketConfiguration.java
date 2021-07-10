package org.example.config;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.security.config.annotation.web.messaging.MessageSecurityMetadataSourceRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
@AllArgsConstructor
public class WebsocketConfiguration implements WebSocketMessageBrokerConfigurer {

    private SecDefaultHandshakeHandler secDefaultHandshakeHandler;
    private HttpHandshakeInterceptor httpHandshakeInterceptor;

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/messages").setAllowedOrigins("*")
                .setHandshakeHandler(secDefaultHandshakeHandler)
//                .addInterceptors(httpHandshakeInterceptor)
                .withSockJS();

    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {

        registry.setApplicationDestinationPrefixes("/app")
                .enableSimpleBroker("/topic");
    }



}
