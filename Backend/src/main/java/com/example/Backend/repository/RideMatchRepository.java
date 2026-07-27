package com.example.Backend.repository;

import com.example.Backend.entity.Ride;
import com.example.Backend.entity.RideMatch;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RideMatchRepository extends JpaRepository<RideMatch, Long> {
    Optional<RideMatch> findByRide1OrRide2(Ride ride1, Ride ride2);
}