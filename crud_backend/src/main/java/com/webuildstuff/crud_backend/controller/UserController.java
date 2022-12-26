package com.webuildstuff.crud_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.webuildstuff.crud_backend.entity.UserEntity;
import com.webuildstuff.crud_backend.repository.UserRepository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class UserController {
    @Autowired
    UserRepository dao;

    @GetMapping(value = "/")
    String homePage() {
        return "Welcome to the Backend Service";
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    ResponseEntity<List<UserEntity>> getUsers() {
        return new ResponseEntity<List<UserEntity>>(dao.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    ResponseEntity<UserEntity> addUser(@RequestBody UserEntity entity) {
        return new ResponseEntity<UserEntity>(dao.save(entity), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/deleteUser/{id}")
    public void deleteUser(@PathVariable("id") int id) {
        dao.deleteById(id);
    }
}
