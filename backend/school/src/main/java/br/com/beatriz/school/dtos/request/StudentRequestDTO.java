
package br.com.beatriz.school.dtos.request;

import br.com.beatriz.school.entities.GradeEntity;
import br.com.beatriz.school.entities.StudentEntity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudentRequestDTO {
	private LocalDate birthDate;
//	private Long id;
//	@NotBlank(message = "O nome do aluno é obrigatório.")
//	private String name;
//
//	@NotBlank(message = "A data de nascimento é obrigatória.")
//	@Pattern(regexp = "\\d{2}/\\d{2}/\\d{4}", message = "A data de nascimento deve estar no formato dd/MM/yyyy.")
//	private String birthDate;
//
//	@NotBlank(message = "O nome do responsável é obrigatório.")
//	private String parentName;
//
//	@Pattern(regexp = "\\d{11}", message = "O celular do responsável deve conter 11 dígitos (ex: 11987654321).")
//	private String parentCellphone;
//
//	@Email(message = "O e-mail deve ser válido.")
//	private String email;
//
//	@NotNull(message = "O ID da turma é obrigatório.")
//	private Long gradeId;

	private String name;

	private String parentName;
	private String parentCellphone;
	private String email;

	private Long gradeId;

	public StudentEntity createEntity(GradeEntity grade) {
		return StudentEntity.builder().name(name).birthDate(birthDate).parentName(parentName)
				.parentCellphone(parentCellphone).email(email).grade(grade).build();
	}
//public StudentEntity createEntity(GradeEntity grade) {
//	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
//	LocalDate date = LocalDate.parse(birthDate, formatter);

//	return StudentEntity.builder()
//			.name(name)
//			.birthDate(date)
//			.parentName(parentName)
//			.parentCellphone(parentCellphone)
//			.email(email)
//			.grade(grade)
//			.build();
}




