
package br.com.beatriz.school.factories;

import br.com.beatriz.school.dtos.request.GradeRequestDTO;

public class GradeRequestDTOFakeModelFactory {

	public static GradeRequestDTO getFakeModel() {
		return GradeRequestDTO.builder().id(1L).year("year").section("section").room("room").teacherId(Long.valueOf(85))
				.build();
	}
}