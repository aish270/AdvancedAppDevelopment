package com.elderly.eventmt.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "theme1")
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "aesthetic",nullable = false)
    private String aesthetic;

    @Column(name = "addon",nullable = false)
    private String addon;




}