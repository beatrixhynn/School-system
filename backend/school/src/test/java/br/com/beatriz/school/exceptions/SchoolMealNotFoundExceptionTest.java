
package br.com.beatriz.school.exceptions;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class SchoolMealNotFoundExceptionTest {

	@Test
	public void testConstructor() {
		SchoolMealNotFoundException exception = new SchoolMealNotFoundException();

		assertEquals("Not found the model: schoolMeal", exception.getMessage());
	}
}