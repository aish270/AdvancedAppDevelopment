package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sample.entity.Event;
import com.sample.repository.EventRepo;

@RestController
@RequestMapping("/products")
public class EventController {
     @Autowired
    private EventRepo rep;
    @GetMapping("/gall")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Event> getAllTheProducts() {
        return rep.findAll();
    }
   
    @PostMapping("/addevent")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public void postAllTheProducts(@RequestBody Event e) {
        rep.save(e);
    }
    
}
