package com.example.Backend.controller;


import com.example.Backend.dto.RideRequest;
import com.example.Backend.entity.*;
import com.example.Backend.repository.RideMatchRepository;
import com.example.Backend.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/rides")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RideController {

    private final RideService rideService;
    private final MatchingService matchingService;

    @PostMapping("/request")
    public ResponseEntity<Ride> requestRide(
            @RequestBody RideRequest request) {
        Ride ride = rideService.createRide(request);
        matchingService.matchRides(ride.getId());
        return ResponseEntity.ok(ride);
    }

    @GetMapping("/history/{passengerId}")
    public ResponseEntity<List<Ride>> getRideHistory(
            @PathVariable Long passengerId) {
        return ResponseEntity.ok(
                rideService.getRideHistory(passengerId));
    }

    @GetMapping("/{rideId}")
    public ResponseEntity<Ride> getRideById(
            @PathVariable Long rideId) {
        return ResponseEntity.ok(
                rideService.getRideById(rideId));
    }

    @GetMapping("/match/{rideId}")
    public ResponseEntity<RideMatch> getMatch(
            @PathVariable Long rideId) {
        return ResponseEntity.ok(
                matchingService.matchRides(rideId));
    }
    private final RideMatchRepository rideMatchRepository;
    @GetMapping("/match/details/{rideId}")
    public ResponseEntity<?> getMatchDetails(@PathVariable Long rideId) {
        Ride ride = rideService.getRideById(rideId);
        return ResponseEntity.ok(
                rideMatchRepository.findByRide1OrRide2(ride, ride)
        );
    }
}