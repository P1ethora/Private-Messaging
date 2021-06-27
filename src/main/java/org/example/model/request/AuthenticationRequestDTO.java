package org.example.model.request;

import lombok.Data;

@Data
public class AuthenticationRequestDTO {

    private String mobile;
    private String password;

}
