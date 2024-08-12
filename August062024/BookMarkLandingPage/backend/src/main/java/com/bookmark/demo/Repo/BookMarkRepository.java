package com.bookmark.demo.Repo;

import com.bookmark.demo.Entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookMarkRepository extends JpaRepository<Bookmark,Long> {
}
