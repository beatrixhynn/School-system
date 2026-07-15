
package br.com.beatriz.school.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Setter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.StudentEntityFakeModelFactory;

@Setter
@Builder


public class StudentEntityTest {

	StudentEntity studentEntity = new StudentEntity();
	StudentEntity fakeModel = StudentEntityFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		studentEntity.setId(1L);
		studentEntity.setName("name");
		studentEntity.setBirthDate(LocalDate.now());
		studentEntity.setParentName("parentName");
		studentEntity.setParentCellphone("parentCellphone");
		studentEntity.setEmail("email");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(studentEntity.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(studentEntity.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(studentEntity.getBirthDate(), fakeModel.getBirthDate(), "field 'birthDate' must match");
		assertEquals(studentEntity.getParentName(), fakeModel.getParentName(), "field 'parentName' must match");
		assertEquals(studentEntity.getParentCellphone(), fakeModel.getParentCellphone(),
				"field 'parentCellphone' must match");
		assertEquals(studentEntity.getEmail(), fakeModel.getEmail(), "field 'email' must match");

	}

}