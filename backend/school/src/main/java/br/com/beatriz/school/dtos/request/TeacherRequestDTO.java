
package br.com.beatriz.school.dtos.request;

import java.math.BigDecimal;
import java.time.LocalDate;

import br.com.beatriz.school.entities.TeacherEntity;
import jakarta.validation.constraints.*;
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
public class TeacherRequestDTO {
	private Long id;

	@NotBlank(message = "O nome é obrigatório")
	private String name;

	@NotNull(message = "A data de nascimento é obrigatória")
	@Past(message = "A data de nascimento deve ser no passado")
	private LocalDate birthDate;

	@NotBlank(message = "A formação é obrigatória")
	private String education;

	@NotBlank(message = "O celular é obrigatório")
	@Pattern(regexp = "\\d{11}", message = "O número de celular deve conter 11 dígitos")
	private String cellphone;

	@NotBlank(message = "O e-mail é obrigatório")
	@Email(message = "O e-mail deve ser válido")
	private String email;

	@NotNull(message = "O salário é obrigatório")
	@Positive(message = "O salário deve ser um valor positivo")
	private BigDecimal salary;

	public TeacherEntity createEntity() {
		return TeacherEntity.builder().name(name).birthDate(birthDate).education(education).cellphone(cellphone)
				.email(email).salary(salary).build();
	}

}