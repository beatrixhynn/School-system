
package br.com.beatriz.school.entities;

import br.com.beatriz.school.dtos.request.SchoolMealUpdateRequestDTO;
import jakarta.persistence.*;
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
@Entity
@Table(name = "TB_SCHOOLMEALS")
public class SchoolMealEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String description;
	private String time;
	private String restrictionType;

	public void updateValuesFrom(SchoolMealUpdateRequestDTO schoolMealUpdateRequestDTO) {
		this.name = schoolMealUpdateRequestDTO.getName();
		this.description = schoolMealUpdateRequestDTO.getDescription();
		this.time = schoolMealUpdateRequestDTO.getTime();
		this.restrictionType = schoolMealUpdateRequestDTO.getRestrictionType();

	}

}