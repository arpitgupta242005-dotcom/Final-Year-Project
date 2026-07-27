package com.example.Backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "ride_matches")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RideMatch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ride1_id")
    private Ride ride1;

    @ManyToOne
    @JoinColumn(name = "ride2_id")
    private Ride ride2;

    private Double distanceBetween;
    private Double costPerPerson;
    private LocalDateTime matchedAt;
}