package br.com.beatriz.school.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.beatriz.school.dtos.request.ContactRequestDTO;
import br.com.beatriz.school.dtos.response.ContactResponseDTO;
import br.com.beatriz.school.entities.ContactEntity;
import br.com.beatriz.school.repositories.ContactRepository;

@Service
public class ContactService {

  @Autowired
  private ContactRepository contactRepository;

  public List<ContactResponseDTO> findAll() {
    return contactRepository
      .findAll()
      .stream()
      .map(ContactResponseDTO::of)
      .collect(Collectors.toList());
  }

  public void create(ContactRequestDTO contactRequestDTO) {
    ContactEntity contact = contactRequestDTO.createEntity();
    contactRepository.save(contact);
  }
}
