
package br.com.beatriz.school.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.TeacherEntityFakeModelFactory;

public class TeacherEntityTest {

	TeacherEntity teacherEntity = new TeacherEntity();
	TeacherEntity fakeModel = TeacherEntityFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		teacherEntity.setId(1L);
		teacherEntity.setName("name");
		teacherEntity.setBirthDate(LocalDate.now());
		teacherEntity.setEducation("education");
		teacherEntity.setCellphone("cellphone");
		teacherEntity.setEmail("email");
		teacherEntity.setSalary(new BigDecimal(33));

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(teacherEntity.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(teacherEntity.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(teacherEntity.getBirthDate(), fakeModel.getBirthDate(), "field 'birthDate' must match");
		assertEquals(teacherEntity.getEducation(), fakeModel.getEducation(), "field 'education' must match");
		assertEquals(teacherEntity.getCellphone(), fakeModel.getCellphone(), "field 'cellphone' must match");
		assertEquals(teacherEntity.getEmail(), fakeModel.getEmail(), "field 'email' must match");
		assertEquals(teacherEntity.getSalary(), fakeModel.getSalary(), "field 'salary' must match");

	}

}