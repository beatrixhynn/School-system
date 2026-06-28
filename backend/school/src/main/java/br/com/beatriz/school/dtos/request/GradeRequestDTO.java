
package br.com.beatriz.school.dtos.request;

import br.com.beatriz.school.entities.GradeEntity;
import br.com.beatriz.school.entities.TeacherEntity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class GradeRequestDTO {

//	private Long id;

	@NotBlank(message = "O campo 'year' é obrigatório")
	private String year;

	@NotBlank(message = "O campo 'section' é obrigatório")
	private String section;

	@NotBlank(message = "O campo 'room' é obrigatório")
	private String room;

	@NotNull(message = "O campo 'teacherId' é obrigatório")
	private Long teacherId;

	public GradeEntity createEntity(TeacherEntity teacher) {
		if (teacher == null) {
			throw new IllegalArgumentException("Professor não pode ser nulo");
		}
		return GradeEntity.builder().year(year).section(section).room(room).teacher(teacher).build();
	}

}