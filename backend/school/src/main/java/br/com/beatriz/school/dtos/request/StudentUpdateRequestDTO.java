
package br.com.beatriz.school.dtos.request;

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
public class StudentUpdateRequestDTO {
	private Long id;

	private String name;
	private LocalDate birthDate;
	private String parentName;
	private String parentCellphone;
	private String email;

	private Long gradeId;

}