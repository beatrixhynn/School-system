
package br.com.beatriz.school.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.GradeEntityFakeModelFactory;

public class GradeEntityTest {

	GradeEntity gradeEntity = new GradeEntity();
	GradeEntity fakeModel = GradeEntityFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		gradeEntity.setId(1L);
		gradeEntity.setYear("year");
		gradeEntity.setSection("section");
		gradeEntity.setRoom("room");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(gradeEntity.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(gradeEntity.getYear(), fakeModel.getYear(), "field 'year' must match");
		assertEquals(gradeEntity.getSection(), fakeModel.getSection(), "field 'section' must match");
		assertEquals(gradeEntity.getRoom(), fakeModel.getRoom(), "field 'room' must match");

	}

}