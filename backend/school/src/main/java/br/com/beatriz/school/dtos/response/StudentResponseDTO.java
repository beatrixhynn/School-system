
package br.com.beatriz.school.dtos.response;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import br.com.beatriz.school.entities.StudentEntity;
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
public class StudentResponseDTO {

	private Long id;
	private String name;
	private LocalDate birthDate;
	private String parentName;
	private String parentCellphone;
	private String email;

	private GradeResponseDTO grade;

	public static StudentResponseDTO of(StudentEntity studentEntity) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

		return StudentResponseDTO.builder()
				.id(studentEntity.getId()).name(studentEntity.getName())
				.birthDate(studentEntity.getBirthDate()).parentName(studentEntity.getParentName())
				.parentCellphone(studentEntity.getParentCellphone()).email(studentEntity.getEmail())
				.grade(GradeResponseDTO.of(studentEntity.getGrade()))

				.build();
	}
}