package br.com.beatriz.school.dtos.response;

public record LoginResponse(
        String token,
        String role
) {}