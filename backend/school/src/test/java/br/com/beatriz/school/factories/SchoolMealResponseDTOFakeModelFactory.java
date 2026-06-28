
package br.com.beatriz.school.factories;

import br.com.beatriz.school.dtos.response.SchoolMealResponseDTO;

public class SchoolMealResponseDTOFakeModelFactory {

	public static SchoolMealResponseDTO getFakeModel() {
		return SchoolMealResponseDTO.builder().id(1L).name("name").description("description").time("time")
				.restrictionType("restrictionType")

				.build();
	}
}