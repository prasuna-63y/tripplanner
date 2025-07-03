package com.tripplanner.tripplanner.repository;

import com.tripplanner.tripplanner.entity.CulturalInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CulturalInfoRepository extends JpaRepository<CulturalInfo, Long> {
    List<CulturalInfo> findByDestination(String destination);  // ✅ Must match field name
}
