package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventMessage {
    private int idFrom;//от кого
    private int idFor;//для кого
    private int idChat;//чат
//    private boolean sender; //true - you send, false - sent you
    private String nameFrom;//имя от
    private String nameFor;//имя для
}