package com.tripplanner.tripplanner.services;

import com.tripplanner.tripplanner.entity.Destination;
import com.tripplanner.tripplanner.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationService {

    @Autowired
    private DestinationRepository destinationRepository;

    public Destination saveDestination(Destination destination) {
        return destinationRepository.save(destination);
    }

    public List<Destination> getAllDestinations() {
        return destinationRepository.findAll();
    }

    public Destination getByName(String name) {
        return destinationRepository.findByName(name);
    }

    public boolean deleteByName(String name) {
        Destination existing = destinationRepository.findByName(name);
        if (existing != null) {
            destinationRepository.delete(existing);
            return true;
        }
        return false;
    }
}
