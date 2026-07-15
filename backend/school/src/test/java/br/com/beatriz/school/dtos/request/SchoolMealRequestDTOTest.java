
package br.com.beatriz.school.dtos.request;

import lombok.*;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.SchoolMealRequestDTOFakeModelFactory;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class SchoolMealRequestDTOTest {

	SchoolMealRequestDTO schoolMealRequestDTO = new SchoolMealRequestDTO();
	SchoolMealRequestDTO fakeModel = SchoolMealRequestDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		schoolMealRequestDTO.setId(1L);
		schoolMealRequestDTO.setName("name");
		schoolMealRequestDTO.setDescription("description");
		schoolMealRequestDTO.setTime("time");
		schoolMealRequestDTO.setRestrictionType("restrictionType");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(schoolMealRequestDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(schoolMealRequestDTO.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(schoolMealRequestDTO.getDescription(), fakeModel.getDescription(),
				"field 'description' must match");
		assertEquals(schoolMealRequestDTO.getTime(), fakeModel.getTime(), "field 'time' must match");
		assertEquals(schoolMealRequestDTO.getRestrictionType(), fakeModel.getRestrictionType(),
				"field 'restrictionType' must match");

	}

}