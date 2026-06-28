
package br.com.beatriz.school.dtos.request;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.GradeUpdateRequestDTOFakeModelFactory;

public class GradeUpdateRequestDTOTest {

	GradeUpdateRequestDTO gradeUpdateRequestDTO = new GradeUpdateRequestDTO();
	GradeUpdateRequestDTO fakeModel = GradeUpdateRequestDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		gradeUpdateRequestDTO.setId(1L);
		gradeUpdateRequestDTO.setYear("year");
		gradeUpdateRequestDTO.setSection("section");
		gradeUpdateRequestDTO.setRoom("room");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(gradeUpdateRequestDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(gradeUpdateRequestDTO.getYear(), fakeModel.getYear(), "field 'year' must match");
		assertEquals(gradeUpdateRequestDTO.getSection(), fakeModel.getSection(), "field 'section' must match");
		assertEquals(gradeUpdateRequestDTO.getRoom(), fakeModel.getRoom(), "field 'room' must match");

	}

}