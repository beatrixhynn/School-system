
package br.com.beatriz.school.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class TeacherNotFoundException extends RuntimeException {

	public TeacherNotFoundException() {
		super("Not found the model: teacher");
	}

}