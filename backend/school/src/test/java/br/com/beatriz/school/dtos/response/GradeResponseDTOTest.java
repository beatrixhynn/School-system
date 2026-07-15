
package br.com.beatriz.school.dtos.response;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.GradeResponseDTOFakeModelFactory;

public class GradeResponseDTOTest {

	GradeResponseDTO gradeResponseDTO = new GradeResponseDTO();
	GradeResponseDTO fakeModel = GradeResponseDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		gradeResponseDTO.setId(1L);
		gradeResponseDTO.setYear("year");
		gradeResponseDTO.setSection("section");
		gradeResponseDTO.setRoom("room");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(gradeResponseDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(gradeResponseDTO.getYear(), fakeModel.getYear(), "field 'year' must match");
		assertEquals(gradeResponseDTO.getSection(), fakeModel.getSection(), "field 'section' must match");
		assertEquals(gradeResponseDTO.getRoom(), fakeModel.getRoom(), "field 'room' must match");

	}

}