
package br.com.beatriz.school.dtos.request;

import java.math.BigDecimal;
import java.time.LocalDate;

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
public class TeacherUpdateRequestDTO {
	private Long id;

	private String name;
	private LocalDate birthDate;
	private String education;

	private String cellphone;
	private String email;
	private BigDecimal salary;

}