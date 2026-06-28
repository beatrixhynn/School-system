
package br.com.beatriz.school.repositories;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.beatriz.school.entities.GradeEntity;
import br.com.beatriz.school.entities.StudentEntity;

public interface StudentRepository extends JpaRepository<StudentEntity, Long> {

	List<StudentEntity> findAllByName(String name);

	Optional<StudentEntity> findByName(String name);

	Optional<StudentEntity> findByBirthDate(LocalDate birthDate);

	Optional<StudentEntity> findByParentName(String parentName);

	Optional<StudentEntity> findByParentCellphone(String parentCellphone);

	Optional<StudentEntity> findByEmail(String email);

	Optional<StudentEntity> findByGrade(GradeEntity grade);

	Page<StudentEntity> findAll(Pageable pageable);

	List<StudentEntity> findAllByGradeOrderByNameAsc(GradeEntity grade);

	List<StudentEntity> findAllByGrade(GradeEntity grade);

	Optional<StudentEntity> findByNameAndBirthDate(String name, LocalDate birthDate);

}