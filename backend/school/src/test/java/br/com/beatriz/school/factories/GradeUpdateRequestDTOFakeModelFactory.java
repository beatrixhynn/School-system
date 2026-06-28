
package br.com.beatriz.school.factories;

import br.com.beatriz.school.dtos.request.GradeUpdateRequestDTO;

public class GradeUpdateRequestDTOFakeModelFactory {

	public static GradeUpdateRequestDTO getFakeModel() {
		return GradeUpdateRequestDTO.builder().id(1L).year("year").section("section").room("room")
				.teacherId(Long.valueOf(15)).build();
	}
}