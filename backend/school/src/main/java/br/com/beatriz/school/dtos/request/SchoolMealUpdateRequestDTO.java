
package br.com.beatriz.school.dtos.request;

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
public class SchoolMealUpdateRequestDTO {
	private Long id;

	private String name;
	private String description;
	private String time;
	private String restrictionType;

}