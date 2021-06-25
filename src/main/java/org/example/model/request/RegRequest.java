package org.example.model.request;

import lombok.Data;

@Data
public class RegRequest {

    private String firstName;
    private String LastName;
    private String mobile;
    private String password;
    private String repeatPassword;
    private String about;

}