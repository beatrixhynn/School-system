
package br.com.beatriz.school.exceptions;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class StudentNotFoundExceptionTest {

	@Test
	public void testConstructor() {
		StudentNotFoundException exception = new StudentNotFoundException();

		assertEquals("Not found the model: student", exception.getMessage());
	}
}