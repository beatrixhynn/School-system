
package br.com.beatriz.school.factories;

import java.math.BigDecimal;
import java.time.LocalDate;

import br.com.beatriz.school.dtos.request.TeacherUpdateRequestDTO;

public class TeacherUpdateRequestDTOFakeModelFactory {

	public static TeacherUpdateRequestDTO getFakeModel() {
		return TeacherUpdateRequestDTO.builder().id(1L).name("name").birthDate(LocalDate.now()).education("education")
				.cellphone("cellphone").email("email").salary(new BigDecimal(33))

				.build();
	}
}