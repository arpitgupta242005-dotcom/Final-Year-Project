package com.example.Backend.service;

import com.example.Backend.dto.*;
import com.example.Backend.entity.User;
import com.example.Backend.repository.UserRepository;
import com.example.Backend.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthResponse register(RegisterRequest request) {
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setPhone(request.getPhone());
        user.setRole(request.getRole());
        user.setVehicleNumber(request.getVehicleNumber());
        user.setLicenseNumber(request.getLicenseNumber());
        user.setVehicleModel(request.getVehicleModel());

        userRepository.save(user);

        String token = jwtUtil.generateToken(user.getEmail(),
                user.getRole().name());
        return new AuthResponse(user.getId(), token, user.getRole().name(), user.getName());
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(),
                user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(user.getEmail(),
                user.getRole().name());
        return new AuthResponse(user.getId(), token, user.getRole().name(), user.getName());
    }
}