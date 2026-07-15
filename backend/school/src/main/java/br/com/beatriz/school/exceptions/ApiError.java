package br.com.beatriz.school.exceptions;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ApiError {
    private int status;
    private String message;
    private LocalDateTime timestamp;

    public static ApiError of(int status, String message) {
        return new ApiError(status, message, LocalDateTime.now());
    }
}
