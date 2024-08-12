package com.bookmark.demo.Repo;

import com.bookmark.demo.Entity.LoginRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.User;

public interface UserRepository extends JpaRepository<LoginRequest, Long> {
    User findByUsername(String username);
}
