
package br.com.beatriz.school.factories;

import br.com.beatriz.school.entities.GradeEntity;

public class GradeEntityFakeModelFactory {

	public static GradeEntity getFakeModel() {
		return GradeEntity.builder().id(1L).year("year").section("section").room("room")
				.teacher(TeacherEntityFakeModelFactory.getFakeModel()).build();
	}
}