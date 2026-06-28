
package br.com.beatriz.school.factories;

import java.time.LocalDate;

import br.com.beatriz.school.dtos.request.StudentUpdateRequestDTO;

public class StudentUpdateRequestDTOFakeModelFactory {

	public static StudentUpdateRequestDTO getFakeModel() {
		return StudentUpdateRequestDTO.builder().id(1L).name("name").birthDate(LocalDate.now()).parentName("parentName")
				.parentCellphone("parentCellphone").email("email").gradeId(Long.valueOf(76)).build();
	}
}