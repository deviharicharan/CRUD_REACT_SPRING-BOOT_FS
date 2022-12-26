package com.webuildstuff.crud_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webuildstuff.crud_backend.entity.UserEntity;

public interface UserDAO extends JpaRepository<UserEntity, Integer> {

}
