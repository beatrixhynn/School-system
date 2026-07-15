
package br.com.beatriz.school.entities;

import java.math.BigDecimal;
import java.time.LocalDate;


import br.com.beatriz.school.dtos.request.TeacherUpdateRequestDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Entity
@Table(name = "TB_TEACHERS")
public class TeacherEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "O nome é obrigatório")
	private String name;

	@Past(message = "A data de nascimento deve ser no passado")
	@NotNull(message = "A data de nascimento é obrigatória")
	private LocalDate birthDate;

	@NotBlank(message = "A formação é obrigatória")
	private String education;


	@NotBlank(message = "O celular é obrigatório")
	@Pattern(regexp = "\\(\\d{2}\\) \\d{5}-\\d{4}", message = "O número de celular deve estar no formato (XX) XXXXX-XXXX")
	private String cellphone;


	@Email(message = "O e-mail deve ser válido")
	@NotBlank(message = "O e-mail é obrigatório")
	private String email;

	@NotNull(message = "O salário é obrigatório")
	@DecimalMin(value = "0.0", inclusive = false, message = "O salário deve ser maior que zero")
	private BigDecimal salary;

	public void updateValuesFrom(TeacherUpdateRequestDTO teacherUpdateRequestDTO) {
		this.name = teacherUpdateRequestDTO.getName();
		this.birthDate = teacherUpdateRequestDTO.getBirthDate();
		this.education = teacherUpdateRequestDTO.getEducation();
		this.cellphone = teacherUpdateRequestDTO.getCellphone();
		this.email = teacherUpdateRequestDTO.getEmail();
		this.salary = teacherUpdateRequestDTO.getSalary();

	}

}