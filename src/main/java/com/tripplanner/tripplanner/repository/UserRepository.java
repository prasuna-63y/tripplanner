package com.tripplanner.tripplanner.repository;


import com.tripplanner.tripplanner.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}

