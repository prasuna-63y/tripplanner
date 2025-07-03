package com.tripplanner.tripplanner.services;

import java.util.List; // Make sure this import exists
import com.tripplanner.tripplanner.entity.CulturalInfo;
import com.tripplanner.tripplanner.entity.CulturalInfo;
import com.tripplanner.tripplanner.repository.CulturalInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CulturalInfoService {
    @Autowired
    private CulturalInfoRepository culturalInfoRepository;

    public CulturalInfo saveCulturalInfo(CulturalInfo info) {
        return culturalInfoRepository.save(info);
    }

    public List<CulturalInfo> getByDestination(String destinationName) {
        return culturalInfoRepository.findByDestination(destinationName);
    }
    public List<CulturalInfo> getAll() {
        return culturalInfoRepository.findAll();
    }

}
