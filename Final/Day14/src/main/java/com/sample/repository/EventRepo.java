package com.sample.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sample.entity.Event;


public interface EventRepo extends JpaRepository<Event, Integer> {
    

}