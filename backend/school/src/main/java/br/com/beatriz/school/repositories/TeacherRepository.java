
package br.com.beatriz.school.repositories;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.beatriz.school.entities.TeacherEntity;

public interface TeacherRepository extends JpaRepository<TeacherEntity, Long> {

	Optional<TeacherEntity> findByName(String name);

	Optional<TeacherEntity> findByBirthDate(LocalDate birthDate);

	Optional<TeacherEntity> findByEducation(String education);

	Optional<TeacherEntity> findByCellphone(String cellphone);

	Optional<TeacherEntity> findByEmail(String email);

	Optional<TeacherEntity> findBySalary(BigDecimal salary);

}