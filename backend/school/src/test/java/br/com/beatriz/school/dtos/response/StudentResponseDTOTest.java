
package br.com.beatriz.school.dtos.response;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.StudentResponseDTOFakeModelFactory;

public class StudentResponseDTOTest {

	StudentResponseDTO studentResponseDTO = new StudentResponseDTO();
	StudentResponseDTO fakeModel = StudentResponseDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		studentResponseDTO.setId(1L);
		studentResponseDTO.setName("name");
		studentResponseDTO.setBirthDate(LocalDate.now());
		studentResponseDTO.setParentName("parentName");
		studentResponseDTO.setParentCellphone("parentCellphone");
		studentResponseDTO.setEmail("email");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(studentResponseDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(studentResponseDTO.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(studentResponseDTO.getBirthDate(), fakeModel.getBirthDate(), "field 'birthDate' must match");
		assertEquals(studentResponseDTO.getParentName(), fakeModel.getParentName(), "field 'parentName' must match");
		assertEquals(studentResponseDTO.getParentCellphone(), fakeModel.getParentCellphone(),
				"field 'parentCellphone' must match");
		assertEquals(studentResponseDTO.getEmail(), fakeModel.getEmail(), "field 'email' must match");

	}

}