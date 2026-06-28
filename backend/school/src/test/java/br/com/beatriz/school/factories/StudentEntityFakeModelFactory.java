
package br.com.beatriz.school.factories;

import java.time.LocalDate;

import br.com.beatriz.school.entities.StudentEntity;

public class StudentEntityFakeModelFactory {

	public static StudentEntity getFakeModel() {
		return StudentEntity.builder().id(1L).name("name").birthDate(LocalDate.now()).parentName("parentName")
				.parentCellphone("parentCellphone").email("email").grade(GradeEntityFakeModelFactory.getFakeModel())
				.build();
	}
}