
package br.com.beatriz.school.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.beatriz.school.entities.GradeEntity;
import br.com.beatriz.school.entities.TeacherEntity;

public interface GradeRepository extends JpaRepository<GradeEntity, Long> {

	Optional<GradeEntity> findByYear(String year);

	Optional<GradeEntity> findBySection(String section);

	Optional<GradeEntity> findByRoom(String room);

	Optional<GradeEntity> findByTeacher(TeacherEntity teacher);

}