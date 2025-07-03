package com.tripplanner.tripplanner.controllers;

import com.tripplanner.tripplanner.entity.CulturalInfo;
import com.tripplanner.tripplanner.services.CulturalInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cultural-info")
@CrossOrigin(origins = "*")
public class CulturalInfoController {

    @Autowired
    private CulturalInfoService culturalInfoService;

    @PostMapping
    public CulturalInfo addInfo(@RequestBody CulturalInfo info) {
        return culturalInfoService.saveCulturalInfo(info);
    }

    @GetMapping("/{destinationName}")
    public List<CulturalInfo> getByDestination(@PathVariable String destinationName) {
        return culturalInfoService.getByDestination(destinationName);
    }

    @GetMapping
    public List<CulturalInfo> getAll() {
        return culturalInfoService.getAll();
    }
}

