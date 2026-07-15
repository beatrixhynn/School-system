
package br.com.beatriz.school.dtos.request;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.TeacherRequestDTOFakeModelFactory;

public class TeacherRequestDTOTest {

	TeacherRequestDTO teacherRequestDTO = new TeacherRequestDTO();
	TeacherRequestDTO fakeModel = TeacherRequestDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		teacherRequestDTO.setId(1L);
		teacherRequestDTO.setName("name");
		teacherRequestDTO.setBirthDate(LocalDate.now());
		teacherRequestDTO.setEducation("education");
		teacherRequestDTO.setCellphone("cellphone");
		teacherRequestDTO.setEmail("email");
		teacherRequestDTO.setSalary(new BigDecimal(33));

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(teacherRequestDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(teacherRequestDTO.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(teacherRequestDTO.getBirthDate(), fakeModel.getBirthDate(), "field 'birthDate' must match");
		assertEquals(teacherRequestDTO.getEducation(), fakeModel.getEducation(), "field 'education' must match");
		assertEquals(teacherRequestDTO.getCellphone(), fakeModel.getCellphone(), "field 'cellphone' must match");
		assertEquals(teacherRequestDTO.getEmail(), fakeModel.getEmail(), "field 'email' must match");
		assertEquals(teacherRequestDTO.getSalary(), fakeModel.getSalary(), "field 'salary' must match");

	}

}