
package br.com.beatriz.school.dtos.response;

import static org.junit.jupiter.api.Assertions.assertEquals;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.SchoolMealResponseDTOFakeModelFactory;

@Getter
@Setter
@Builder
@AllArgsConstructor

public class SchoolMealResponseDTOTest {

	SchoolMealResponseDTO schoolMealResponseDTO = new SchoolMealResponseDTO();
	SchoolMealResponseDTO fakeModel = SchoolMealResponseDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		schoolMealResponseDTO.setId(1L);
		schoolMealResponseDTO.setName("name");
		schoolMealResponseDTO.setDescription("description");
		schoolMealResponseDTO.setTime("time");
		schoolMealResponseDTO.setRestrictionType("restrictionType");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(schoolMealResponseDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(schoolMealResponseDTO.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(schoolMealResponseDTO.getDescription(), fakeModel.getDescription(),
				"field 'description' must match");
		assertEquals(schoolMealResponseDTO.getTime(), fakeModel.getTime(), "field 'time' must match");
		assertEquals(schoolMealResponseDTO.getRestrictionType(), fakeModel.getRestrictionType(),
				"field 'restrictionType' must match");

	}

}