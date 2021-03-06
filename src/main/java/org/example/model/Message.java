package org.example.model;

import jdk.jfr.BooleanFlag;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.model.enumeration.MessageState;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "nameFrom")
    private String nameFrom;
    @Column(name = "text")
    private String text;
    @Column(name = "fromLogin")
    private long fromLogin;
    @Column(name = "forlogin")
    private long forLogin;
    @Column(name = "state")
    @Enumerated(value = EnumType.STRING)
    private MessageState state;
    @Column(name = "chat_id")
    private long idChat;
    @Column(name = "date")
    private Date date;
}