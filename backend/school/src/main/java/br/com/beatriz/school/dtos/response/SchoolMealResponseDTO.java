
package br.com.beatriz.school.dtos.response;

import br.com.beatriz.school.entities.SchoolMealEntity;
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
public class SchoolMealResponseDTO {

	private Long id;
	private String name;
	private String description;
	private String time;
	private String restrictionType;

	public static SchoolMealResponseDTO of(SchoolMealEntity schoolMealEntity) {
		return SchoolMealResponseDTO.builder().id(schoolMealEntity.getId()).name(schoolMealEntity.getName())
				.description(schoolMealEntity.getDescription()).time(schoolMealEntity.getTime())
				.restrictionType(schoolMealEntity.getRestrictionType())

				.build();
	}
}