package com.tripplanner.tripplanner.controllers;

import com.tripplanner.tripplanner.entity.User;
import com.tripplanner.tripplanner.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        return userService.validateUser(user.getEmail(), user.getPassword());
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

}

