
package br.com.beatriz.school.dtos.response;

import java.math.BigDecimal;
import java.time.LocalDate;

import br.com.beatriz.school.entities.TeacherEntity;
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
public class TeacherResponseDTO {

	private Long id;
	private String name;
	private LocalDate birthDate;
	private String education;
	private String cellphone;
	private String email;
	private BigDecimal salary;

	public static TeacherResponseDTO of(TeacherEntity teacherEntity) {
		return TeacherResponseDTO.builder().id(teacherEntity.getId()).name(teacherEntity.getName())
				.birthDate(teacherEntity.getBirthDate()).education(teacherEntity.getEducation())
				.cellphone(teacherEntity.getCellphone()).email(teacherEntity.getEmail())
				.salary(teacherEntity.getSalary())

				.build();
	}
}