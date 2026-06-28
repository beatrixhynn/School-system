
package br.com.beatriz.school.exceptions;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class GradeNotFoundExceptionTest {

	@Test
	public void testConstructor() {
		GradeNotFoundException exception = new GradeNotFoundException();

		assertEquals("Not found the model: grade", exception.getMessage());
	}
}