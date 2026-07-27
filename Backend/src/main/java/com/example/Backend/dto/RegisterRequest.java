package com.example.Backend.dto;

import com.example.Backend.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private String phone;
    private Role role;
    private String vehicleNumber;
    private String licenseNumber;
    private String vehicleModel;
}