
package br.com.beatriz.school.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;

import lombok.Builder;
import lombok.Getter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.com.beatriz.school.factories.SchoolMealEntityFakeModelFactory;

@Getter
@Builder

public class SchoolMealEntityTest {

	SchoolMealEntity schoolMealEntity = new SchoolMealEntity();
	SchoolMealEntity fakeModel = SchoolMealEntityFakeModelFactory.getFakeModel();

	@BeforeEach
	public void beforeEach() {
		schoolMealEntity.setId(1L);
		schoolMealEntity.setName("name");
		schoolMealEntity.setDescription("description");
		schoolMealEntity.setTime("time");
		schoolMealEntity.setRestrictionType("restrictionType");

	}

	@Test
	public void mustBeEqualsGetters() {

		assertEquals(schoolMealEntity.getId(), fakeModel.getId(), "field 'id' must match");
		assertEquals(schoolMealEntity.getName(), fakeModel.getName(), "field 'name' must match");
		assertEquals(schoolMealEntity.getDescription(), fakeModel.getDescription(), "field 'description' must match");
		assertEquals(schoolMealEntity.getTime(), fakeModel.getTime(), "field 'time' must match");
		assertEquals(schoolMealEntity.getRestrictionType(), fakeModel.getRestrictionType(),
				"field 'restrictionType' must match");

	}

}