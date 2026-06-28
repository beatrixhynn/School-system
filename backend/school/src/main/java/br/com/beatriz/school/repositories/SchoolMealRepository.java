
package br.com.beatriz.school.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.beatriz.school.entities.SchoolMealEntity;

public interface SchoolMealRepository extends JpaRepository<SchoolMealEntity, Long> {

	Optional<SchoolMealEntity> findByName(String name);

	Optional<SchoolMealEntity> findByDescription(String description);

	Optional<SchoolMealEntity> findByTime(String time);

	Optional<SchoolMealEntity> findByRestrictionType(String restrictionType);

}