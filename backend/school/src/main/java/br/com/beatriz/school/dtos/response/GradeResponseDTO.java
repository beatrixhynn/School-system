
package br.com.beatriz.school.dtos.response;

import br.com.beatriz.school.entities.GradeEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GradeResponseDTO {

	private Long id;
	private String year;
	private String section;
	private String room;

	private TeacherResponseDTO teacher;

	public static GradeResponseDTO of(GradeEntity gradeEntity) {
		if (gradeEntity == null) {
			throw new IllegalArgumentException("GradeEntity não pode ser nulo");
		}
		return GradeResponseDTO.builder().id(gradeEntity.getId()).year(gradeEntity.getYear())
				.section(gradeEntity.getSection()).room(gradeEntity.getRoom())
				.teacher(gradeEntity.getTeacher() != null
						? TeacherResponseDTO.of(gradeEntity.getTeacher())
						: null)
				.build();



//				.teacher(TeacherResponseDTO.of(gradeEntity.getTeacher()))


	}
}