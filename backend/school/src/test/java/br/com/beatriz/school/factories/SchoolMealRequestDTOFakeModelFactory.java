
package br.com.beatriz.school.factories;

import br.com.beatriz.school.dtos.request.SchoolMealRequestDTO;

public class SchoolMealRequestDTOFakeModelFactory {

	public static SchoolMealRequestDTO getFakeModel() {
		return SchoolMealRequestDTO.builder().id(1L).name("name").description("description").time("time")
				.restrictionType("restrictionType")

				.build();
	}
}