
package br.com.beatriz.school.entities;


import br.com.beatriz.school.dtos.request.GradeUpdateRequestDTO;
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
@Table(name = "TB_GRADES")
public class GradeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String year;
	private String section;
	private String room;

    @ManyToOne
    @JoinColumn(name = "teacher_id", nullable = false)
	private TeacherEntity teacher;

	public void updateValuesFrom(GradeUpdateRequestDTO gradeUpdateRequestDTO, TeacherEntity teacher) {
		this.year = gradeUpdateRequestDTO.getYear();
		this.section = gradeUpdateRequestDTO.getSection();
		this.room = gradeUpdateRequestDTO.getRoom();
		this.teacher = teacher;

	}

}