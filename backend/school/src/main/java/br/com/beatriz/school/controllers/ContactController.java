package br.com.beatriz.school.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import br.com.beatriz.school.dtos.request.ContactRequestDTO;
import br.com.beatriz.school.dtos.response.ContactResponseDTO;
import br.com.beatriz.school.services.ContactService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/contacts")
public class ContactController {

  @Autowired
  private ContactService contactService;

  @GetMapping
  public ResponseEntity<List<ContactResponseDTO>> getAll() {
    return new ResponseEntity<>(contactService.findAll(), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Void> create(
    @RequestBody @Validated ContactRequestDTO contactRequestDTO) {

    contactService.create(contactRequestDTO);

    return new ResponseEntity<>(HttpStatus.CREATED);
  }

}
