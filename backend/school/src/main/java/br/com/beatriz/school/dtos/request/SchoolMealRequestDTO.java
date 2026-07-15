
package br.com.beatriz.school.dtos.request;

import br.com.beatriz.school.entities.SchoolMealEntity;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SchoolMealRequestDTO {


	private Long id;

	@NotBlank(message = "O nome não pode estar em branco")
	private String name;

	@NotBlank(message = "A descrição não pode estar em branco")
	private String description;

	@NotBlank(message = "O horário não pode estar em branco")
	private String time;

	@NotBlank(message = "O tipo de restrição não pode estar em branco")
	private String restrictionType;

	public SchoolMealEntity createEntity() {
		return SchoolMealEntity.builder().name(name).description(description).time(time)
				.restrictionType(restrictionType).build();
	}

}