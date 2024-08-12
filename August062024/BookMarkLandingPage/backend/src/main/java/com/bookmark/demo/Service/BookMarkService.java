package com.bookmark.demo.Service;

import com.bookmark.demo.Entity.Bookmark;
import com.bookmark.demo.Repo.BookMarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookMarkService {


    @Autowired
    private BookMarkRepository bookMarkRepository;

    public Bookmark saveBookmark(Bookmark bookmark){
        return bookMarkRepository.save(bookmark);
    }

    public List<Bookmark> getAllBookmarks(){
        return bookMarkRepository.findAll();

    }
    public Bookmark updateBookMark(Long id, Bookmark bookmark){
        Bookmark existingBookmark = bookMarkRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Bookmark not found"));
        existingBookmark.setUrl(bookmark.getUrl());
        return bookMarkRepository.save(existingBookmark);

    }
    public void deleteBookmark(Long id){
        bookMarkRepository.deleteById(id);
    }
    public void deleteAllBookMarks(){
        bookMarkRepository.deleteAll();
    }
}
