
package br.com.beatriz.school.factories;

import java.time.LocalDate;

import br.com.beatriz.school.dtos.response.StudentResponseDTO;

public class StudentResponseDTOFakeModelFactory {

	public static StudentResponseDTO getFakeModel() {
		return StudentResponseDTO.builder().id(1L).name("name").birthDate(LocalDate.now()).parentName("parentName")
				.parentCellphone("parentCellphone").email("email")
				.grade(GradeResponseDTOFakeModelFactory.getFakeModel()).build();
	}
}