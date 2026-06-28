
package br.com.beatriz.school.factories;

import br.com.beatriz.school.entities.SchoolMealEntity;

public class SchoolMealEntityFakeModelFactory {

	public static SchoolMealEntity getFakeModel() {
		return SchoolMealEntity.builder().id(1L).name("name").description("description").time("time")
				.restrictionType("restrictionType")

				.build();
	}
}