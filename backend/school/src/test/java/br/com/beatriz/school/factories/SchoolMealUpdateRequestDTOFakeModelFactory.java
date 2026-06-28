
package br.com.beatriz.school.factories;

import br.com.beatriz.school.dtos.request.SchoolMealUpdateRequestDTO;

public class SchoolMealUpdateRequestDTOFakeModelFactory {

	public static SchoolMealUpdateRequestDTO getFakeModel() {
		return SchoolMealUpdateRequestDTO.builder().id(1L).name("name").description("description").time("time")
				.restrictionType("restrictionType")

				.build();
	}
}