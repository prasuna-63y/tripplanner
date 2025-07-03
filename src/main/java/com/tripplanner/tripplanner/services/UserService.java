package com.tripplanner.tripplanner.services;

import java.util.List;
import com.tripplanner.tripplanner.entity.User;
import com.tripplanner.tripplanner.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public User login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
    public User validateUser(String email, String password) {
        return login(email, password);
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
