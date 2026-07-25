package com.example.Backend.dto;

import lombok.Data;

@Data
public class RideRequest {
    private Long passengerId;
    private String pickupLocation;
    private String destination;
    private Double pickupLat;
    private Double pickupLon;
    private Double destinationLat;
    private Double destinationLon;
    private Integer passengers;
    private String rideType;
}