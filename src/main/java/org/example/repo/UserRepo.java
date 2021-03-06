package org.example.repo;

import org.example.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    User findByMobile(String mobile);

    List<User> findAllByFirstNameStartsWithAndLastNameStartsWith(String firstName, String lastName);
}
