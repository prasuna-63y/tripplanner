package com.tripplanner.tripplanner.repository;

import com.tripplanner.tripplanner.entity.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DestinationRepository extends JpaRepository<Destination, Long> {
    Destination findByName(String name);  // ✅ This is needed
}
