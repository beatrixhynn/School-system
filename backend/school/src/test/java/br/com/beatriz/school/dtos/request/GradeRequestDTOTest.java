
package br.com.beatriz.school.dtos.request;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.GradeRequestDTOFakeModelFactory;

public class GradeRequestDTOTest {

	GradeRequestDTO gradeRequestDTO = new GradeRequestDTO();
	GradeRequestDTO fakeModel = GradeRequestDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		gradeRequestDTO.setId(1L);
		gradeRequestDTO.setYear("year");
		gradeRequestDTO.setSection("section");
		gradeRequestDTO.setRoom("room");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(gradeRequestDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(gradeRequestDTO.getYear(), fakeModel.getYear(), "field 'year' must match");
		assertEquals(gradeRequestDTO.getSection(), fakeModel.getSection(), "field 'section' must match");
		assertEquals(gradeRequestDTO.getRoom(), fakeModel.getRoom(), "field 'room' must match");

	}

}