package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
@Column(name = "iduserone")
    private long idUserOne;
@Column(name = "idusertwo")
    private long idUserTwo;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = Message.class)
    @JoinColumn(name = "chat_id")
    private List<Message> messages;


    @Override
public int hashCode() {
        return Math.toIntExact(((idUserOne + idUserTwo) * 2) - Math.max(idUserOne, idUserTwo));
}

@Override
    public boolean equals(Object object) {
    return hashCode() == object.hashCode();
}


}
