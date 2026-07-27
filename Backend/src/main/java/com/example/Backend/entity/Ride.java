package com.example.Backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "rides")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ride {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "passenger_id")
    private User passenger;

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private User driver;

    private String pickupLocation;
    private String destination;
    private Double pickupLat;
    private Double pickupLon;
    private Double destinationLat;
    private Double destinationLon;
    private Integer passengers;
    private String rideType; // SHARED ya PRIVATE
    private Double estimatedFare;
    private LocalDateTime createdAt;

    @Enumerated(EnumType.STRING)
    private RideStatus status;
}