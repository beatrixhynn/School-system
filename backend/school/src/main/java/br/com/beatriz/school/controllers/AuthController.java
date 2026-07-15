package br.com.beatriz.school.controllers;

import br.com.beatriz.school.dtos.request.LoginRequest;
import br.com.beatriz.school.entities.UserModel;
import br.com.beatriz.school.repositories.UserRepository;
import br.com.beatriz.school.services.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // 🔥 LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        try {
            // autentica email + senha
            authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.email(),
                            request.password()
                    )
            );

            // busca UserDetails (necessário pro JWT)
            UserDetails userDetails =
                    userDetailsService.loadUserByUsername(request.email());

            // 🔥 busca usuário completo (para pegar o role)
            UserModel user = userRepository.findByEmail(request.email())
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

            // gera token
            String token = jwtService.generateToken(userDetails);

            // retorna token + email + role
            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "email", user.getEmail(),
                    "role", user.getRole().name()
            ));

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body(
                    Map.of("error", "Email ou senha inválidos")
            );
        }
    }

    // 🔥 REGISTER
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserModel user) {

        // verifica se email já existe
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(409)
                    .body(Map.of("error", "Email já cadastrado"));
        }

        // criptografa senha
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // define role padrão se não veio
        if (user.getRole() == null) {
            user.setRole(br.com.beatriz.school.entities.Role.PAI);
        }

        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "Usuário criado com sucesso"));
    }
}