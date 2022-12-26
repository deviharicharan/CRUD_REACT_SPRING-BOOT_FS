package com.webuildstuff.crud_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webuildstuff.crud_backend.entity.UserEntity;
import com.webuildstuff.crud_backend.repository.UserDAO;

@RestController
public class UserController {
    @Autowired
    UserDAO dao;

    @GetMapping(value = "/getAll")
    ResponseEntity<List<UserEntity>> getUsers() {
        return new ResponseEntity<List<UserEntity>>(dao.findAll(),HttpStatus.OK);

    }
}
