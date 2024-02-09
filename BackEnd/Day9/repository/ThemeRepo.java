package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.sample.entity.Theme;


public interface ThemeRepo extends JpaRepository<Theme, Integer> {
   

}
