package br.com.beatriz.school.dtos.request;

public record LoginRequest(
        String email,
        String password
) {}