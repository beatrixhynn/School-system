
package br.com.beatriz.school.dtos.response;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.TeacherResponseDTOFakeModelFactory;

public class TeacherResponseDTOTest {

	TeacherResponseDTO teacherResponseDTO = new TeacherResponseDTO();
	TeacherResponseDTO fakeModel = TeacherResponseDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		teacherResponseDTO.setId(1L);
		teacherResponseDTO.setName("name");
		teacherResponseDTO.setBirthDate(LocalDate.now());
		teacherResponseDTO.setEducation("education");
		teacherResponseDTO.setCellphone("cellphone");
		teacherResponseDTO.setEmail("email");
		teacherResponseDTO.setSalary(new BigDecimal(33));

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(teacherResponseDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(teacherResponseDTO.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(teacherResponseDTO.getBirthDate(), fakeModel.getBirthDate(), "field 'birthDate' must match");
		assertEquals(teacherResponseDTO.getEducation(), fakeModel.getEducation(), "field 'education' must match");
		assertEquals(teacherResponseDTO.getCellphone(), fakeModel.getCellphone(), "field 'cellphone' must match");
		assertEquals(teacherResponseDTO.getEmail(), fakeModel.getEmail(), "field 'email' must match");
		assertEquals(teacherResponseDTO.getSalary(), fakeModel.getSalary(), "field 'salary' must match");

	}

}