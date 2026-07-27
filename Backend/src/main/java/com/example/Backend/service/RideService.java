package com.example.Backend.service;

import com.example.Backend.dto.RideRequest;
import com.example.Backend.entity.*;
import com.example.Backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RideService {

    private final RideRepository rideRepository;
    private final UserRepository userRepository;

    public Ride createRide(RideRequest request) {
        User passenger = userRepository.findById(request.getPassengerId())
                .orElseThrow(() -> new RuntimeException("Passenger not found"));

        Ride ride = new Ride();
        ride.setPassenger(passenger);
        ride.setPickupLocation(request.getPickupLocation());
        ride.setDestination(request.getDestination());
        ride.setPickupLat(request.getPickupLat());
        ride.setPickupLon(request.getPickupLon());
        ride.setDestinationLat(request.getDestinationLat());
        ride.setDestinationLon(request.getDestinationLon());
        ride.setPassengers(request.getPassengers());
        ride.setRideType(request.getRideType());
        ride.setStatus(RideStatus.PENDING);
        ride.setCreatedAt(LocalDateTime.now());

        return rideRepository.save(ride);
    }

    public List<Ride> getRideHistory(Long passengerId) {
        return rideRepository.findByPassengerId(passengerId);
    }

    public Ride getRideById(Long rideId) {
        return rideRepository.findById(rideId)
                .orElseThrow(() -> new RuntimeException("Ride not found"));
    }
}