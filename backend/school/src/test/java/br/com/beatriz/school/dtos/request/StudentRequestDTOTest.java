
package br.com.beatriz.school.dtos.request;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.StudentRequestDTOFakeModelFactory;

public class StudentRequestDTOTest {

	StudentRequestDTO studentRequestDTO = new StudentRequestDTO();
	StudentRequestDTO fakeModel = StudentRequestDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		studentRequestDTO.setId(1L);
		studentRequestDTO.setName("name");
		studentRequestDTO.setBirthDate(LocalDate.now());
		studentRequestDTO.setParentName("parentName");
		studentRequestDTO.setParentCellphone("parentCellphone");
		studentRequestDTO.setEmail("email");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(studentRequestDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(studentRequestDTO.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(studentRequestDTO.getBirthDate(), fakeModel.getBirthDate(), "field 'birthDate' must match");
		assertEquals(studentRequestDTO.getParentName(), fakeModel.getParentName(), "field 'parentName' must match");
		assertEquals(studentRequestDTO.getParentCellphone(), fakeModel.getParentCellphone(),
				"field 'parentCellphone' must match");
		assertEquals(studentRequestDTO.getEmail(), fakeModel.getEmail(), "field 'email' must match");

	}

}