package com.example.Backend.service;

import com.example.Backend.entity.*;
import com.example.Backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MatchingService {

    private final RideRepository rideRepository;
    private final RideMatchRepository rideMatchRepository;

    private static final double MAX_DISTANCE_KM = 2.0;

    public RideMatch matchRides(Long newRideId) {
        Ride newRide = rideRepository.findById(newRideId)
                .orElseThrow(() -> new RuntimeException("Ride not found"));

        List<Ride> pendingRides = rideRepository.findByStatus(RideStatus.PENDING);

        for (Ride existingRide : pendingRides) {
            if (existingRide.getId().equals(newRideId)) continue;

            double distance = haversine(
                    newRide.getPickupLat(), newRide.getPickupLon(),
                    existingRide.getPickupLat(), existingRide.getPickupLon()
            );

            if (distance <= MAX_DISTANCE_KM) {
                RideMatch match = new RideMatch();
                match.setRide1(existingRide);
                match.setRide2(newRide);
                match.setDistanceBetween(distance);
                match.setMatchedAt(LocalDateTime.now());

                // Cost split
                double totalFare = 180.0;
                match.setCostPerPerson(totalFare / 2);

                newRide.setStatus(RideStatus.MATCHED);
                existingRide.setStatus(RideStatus.MATCHED);
                rideRepository.save(newRide);
                rideRepository.save(existingRide);

                return rideMatchRepository.save(match);
            }
        }
        return null; // No match found
    }

    // Haversine Formula
    private double haversine(double lat1, double lon1,
                             double lat2, double lon2) {
        final int R = 6371;
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(Math.toRadians(lat1))
                * Math.cos(Math.toRadians(lat2))
                * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
}