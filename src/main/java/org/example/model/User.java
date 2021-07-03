package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.model.enumeration.userenum.Role;
import org.example.model.idmodel.IdChat;
import org.example.model.idmodel.IdContactUser;
import org.example.model.enumeration.userenum.State;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "firstname")
    private String firstName;
    @Column(name = "lastname")
    private String LastName;
    @Column(name = "mobile")
    private String mobile;
    @Column(name = "password")
    private String password;
    @Column(name = "photo")
    private String urlPhoto;
    @Column(name = "role")
    @Enumerated(value = EnumType.STRING)
    private Role role;
    @Column(name = "state")
    @Enumerated(value = EnumType.STRING)
    private State state;
    @Column(name = "about")
    private String about;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = IdChat.class)
    @JoinColumn(name = "user_id")
    private List<IdChat> chatList;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = IdContactUser.class)
    @JoinColumn(name = "user_id")
    private List<IdContactUser> contactList;

}