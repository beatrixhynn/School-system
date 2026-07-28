package br.com.beatriz.school.dtos.response;

import br.com.beatriz.school.entities.ContactEntity;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ContactResponseDTO {

  private Long id;
  private String name;
  private String email;

  public static ContactResponseDTO of(ContactEntity entity) {
    return ContactResponseDTO.builder()
      .id(entity.getId())
      .name(entity.getName())
      .email(entity.getEmail())
      .build();
  }
}
