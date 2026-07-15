
package br.com.beatriz.school.dtos.request;

import static org.junit.jupiter.api.Assertions.assertEquals;

import lombok.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


import br.com.beatriz.school.factories.SchoolMealUpdateRequestDTOFakeModelFactory;

@Getter
@Setter
@Builder
@AllArgsConstructor

public class SchoolMealUpdateRequestDTOTest {

	SchoolMealUpdateRequestDTO schoolMealUpdateRequestDTO = new SchoolMealUpdateRequestDTO();
	SchoolMealUpdateRequestDTO fakeModel = SchoolMealUpdateRequestDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		schoolMealUpdateRequestDTO.setId(1L);
		schoolMealUpdateRequestDTO.setName("name");
		schoolMealUpdateRequestDTO.setDescription("description");
		schoolMealUpdateRequestDTO.setTime("time");
		schoolMealUpdateRequestDTO.setRestrictionType("restrictionType");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(schoolMealUpdateRequestDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(schoolMealUpdateRequestDTO.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(schoolMealUpdateRequestDTO.getDescription(), fakeModel.getDescription(),
				"field 'description' must match");
		assertEquals(schoolMealUpdateRequestDTO.getTime(), fakeModel.getTime(), "field 'time' must match");
		assertEquals(schoolMealUpdateRequestDTO.getRestrictionType(), fakeModel.getRestrictionType(),
				"field 'restrictionType' must match");

	}

}