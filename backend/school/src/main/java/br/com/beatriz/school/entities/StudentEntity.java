
package br.com.beatriz.school.entities;

import java.time.LocalDate;


import br.com.beatriz.school.dtos.request.StudentUpdateRequestDTO;
import jakarta.persistence.*;
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
@Entity
@Table(name = "TB_STUDENTS")
public class StudentEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private LocalDate birthDate;
	private String parentName;
	private String parentCellphone;
	private String email;

	@ManyToOne
	private GradeEntity grade;

	public void updateValuesFrom(StudentUpdateRequestDTO studentUpdateRequestDTO, GradeEntity grade) {
		this.name = studentUpdateRequestDTO.getName();
		this.birthDate = studentUpdateRequestDTO.getBirthDate();
		this.parentName = studentUpdateRequestDTO.getParentName();
		this.parentCellphone = studentUpdateRequestDTO.getParentCellphone();
		this.email = studentUpdateRequestDTO.getEmail();
		this.grade = grade;

	}

}