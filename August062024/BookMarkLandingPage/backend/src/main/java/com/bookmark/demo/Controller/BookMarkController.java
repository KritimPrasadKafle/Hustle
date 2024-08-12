package com.bookmark.demo.Controller;

import com.bookmark.demo.Entity.Bookmark;
import com.bookmark.demo.Service.BookMarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookmarks")

public class BookMarkController {

    @Autowired
    private BookMarkService bookMarkService;

    @PostMapping
    public Bookmark addBookMark(@RequestBody Bookmark bookmark){
        return bookMarkService.saveBookmark(bookmark);
    }

    @GetMapping
    public List<Bookmark> getBookMark(){
        return bookMarkService.getAllBookmarks();

    }
    @PutMapping("/{id}")
    public Bookmark updateBookMark(@PathVariable Long id, @RequestBody Bookmark bookmark){
        return bookMarkService.updateBookMark(id,bookmark);
    }
    @DeleteMapping("/{id}")
    public void deleteBookmark(@PathVariable Long id){
        bookMarkService.deleteBookmark(id);
    }
    @DeleteMapping
    public void deleteAllBookMarks(){
        bookMarkService.deleteAllBookMarks();
    }


}
