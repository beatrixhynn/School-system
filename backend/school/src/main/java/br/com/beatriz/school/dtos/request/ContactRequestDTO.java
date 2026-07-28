package br.com.beatriz.school.dtos.request;

import br.com.beatriz.school.entities.ContactEntity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactRequestDTO {

  @NotBlank
  private String name;

  @NotBlank
  @Email
  private String email;

  public ContactEntity createEntity() {
    return ContactEntity.builder()
      .name(name)
      .email(email)
      .build();
  }
}
