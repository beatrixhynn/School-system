
package br.com.beatriz.school.dtos.request;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.TeacherUpdateRequestDTOFakeModelFactory;

public class TeacherUpdateRequestDTOTest {

	TeacherUpdateRequestDTO teacherUpdateRequestDTO = new TeacherUpdateRequestDTO();
	TeacherUpdateRequestDTO fakeModel = TeacherUpdateRequestDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		teacherUpdateRequestDTO.setId(1L);
		teacherUpdateRequestDTO.setName("name");
		teacherUpdateRequestDTO.setBirthDate(LocalDate.now());
		teacherUpdateRequestDTO.setEducation("education");
		teacherUpdateRequestDTO.setCellphone("cellphone");
		teacherUpdateRequestDTO.setEmail("email");
		teacherUpdateRequestDTO.setSalary(new BigDecimal(33));

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(teacherUpdateRequestDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(teacherUpdateRequestDTO.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(teacherUpdateRequestDTO.getBirthDate(), fakeModel.getBirthDate(), "field 'birthDate' must match");
		assertEquals(teacherUpdateRequestDTO.getEducation(), fakeModel.getEducation(), "field 'education' must match");
		assertEquals(teacherUpdateRequestDTO.getCellphone(), fakeModel.getCellphone(), "field 'cellphone' must match");
		assertEquals(teacherUpdateRequestDTO.getEmail(), fakeModel.getEmail(), "field 'email' must match");
		assertEquals(teacherUpdateRequestDTO.getSalary(), fakeModel.getSalary(), "field 'salary' must match");

	}

}