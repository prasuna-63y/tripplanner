package com.tripplanner.tripplanner.controllers;


import com.tripplanner.tripplanner.entity.Destination;
import com.tripplanner.tripplanner.services.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/destinations")
@CrossOrigin(origins = "*")

public class DestinationController {

    @Autowired
    private DestinationService destinationService;

    @GetMapping("/{name}")
    public Destination getDestinationByName(@PathVariable String name) {
        return destinationService.getByName(name);
    }

    @DeleteMapping("/{name}")
    public String deleteDestination(@PathVariable String name) {
        boolean deleted = destinationService.deleteByName(name);
        if (deleted) {
            return "Destination deleted successfully.";
        } else {
            return "Destination not found.";
        }
    }


    @PostMapping
    public Destination saveDestination(@RequestBody Destination destination) {
        return destinationService.saveDestination(destination);
    }

    @GetMapping
    public List<Destination> getAllDestinations() {
        return destinationService.getAllDestinations();
    }
}
