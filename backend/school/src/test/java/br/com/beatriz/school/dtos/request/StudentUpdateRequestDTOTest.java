
package br.com.beatriz.school.dtos.request;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.StudentUpdateRequestDTOFakeModelFactory;

public class StudentUpdateRequestDTOTest {

	StudentUpdateRequestDTO studentUpdateRequestDTO = new StudentUpdateRequestDTO();
	StudentUpdateRequestDTO fakeModel = StudentUpdateRequestDTOFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		studentUpdateRequestDTO.setId(1L);
		studentUpdateRequestDTO.setName("name");
		studentUpdateRequestDTO.setBirthDate(LocalDate.now());
		studentUpdateRequestDTO.setParentName("parentName");
		studentUpdateRequestDTO.setParentCellphone("parentCellphone");
		studentUpdateRequestDTO.setEmail("email");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(studentUpdateRequestDTO.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(studentUpdateRequestDTO.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(studentUpdateRequestDTO.getBirthDate(), fakeModel.getBirthDate(), "field 'birthDate' must match");
		assertEquals(studentUpdateRequestDTO.getParentName(), fakeModel.getParentName(),
				"field 'parentName' must match");
		assertEquals(studentUpdateRequestDTO.getParentCellphone(), fakeModel.getParentCellphone(),
				"field 'parentCellphone' must match");
		assertEquals(studentUpdateRequestDTO.getEmail(), fakeModel.getEmail(), "field 'email' must match");

	}

}