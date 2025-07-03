package com.tripplanner.tripplanner.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CulturalInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String destination; // ✅ Correct field name

    private String food;
    private String festivals;
    private String temples;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getFestivals() {
        return festivals;
    }

    public void setFestivals(String festivals) {
        this.festivals = festivals;
    }

    public String getTemples() {
        return temples;
    }

    public void setTemples(String temples) {
        this.temples = temples;
    }
}
