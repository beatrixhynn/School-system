
package br.com.beatriz.school.factories;

import br.com.beatriz.school.dtos.response.GradeResponseDTO;

public class GradeResponseDTOFakeModelFactory {

	public static GradeResponseDTO getFakeModel() {
		return GradeResponseDTO.builder().id(1L).year("year").section("section").room("room")
				.teacher(TeacherResponseDTOFakeModelFactory.getFakeModel()).build();
	}
}