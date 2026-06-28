
package br.com.beatriz.school.exceptions;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class TeacherNotFoundExceptionTest {

	@Test
	public void testConstructor() {
		TeacherNotFoundException exception = new TeacherNotFoundException();

		assertEquals("Not found the model: teacher", exception.getMessage());
	}
}