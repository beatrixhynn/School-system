
package br.com.beatriz.school.factories;

import java.time.LocalDate;

import br.com.beatriz.school.dtos.request.StudentRequestDTO;

public class StudentRequestDTOFakeModelFactory {

	public static StudentRequestDTO getFakeModel() {
		return StudentRequestDTO.builder().id(1L).name("name").birthDate(LocalDate.now()).parentName("parentName")
				.parentCellphone("parentCellphone").email("email").gradeId(Long.valueOf(34)).build();
	}
}